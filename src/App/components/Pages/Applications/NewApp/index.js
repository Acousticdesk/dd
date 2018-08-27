import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import API from '../../../../../API';
import validate from '../../../../validations/new-app';
import NewAppPresentation from './Presentation/index';
import ApplicationTextFields from './ApplicationTextFields';
import IntegrationSelect from './IntegrationSelect';
import StatusField from './StatusField';
import PlatformSelect from '../PlatformSelect';

class NewApp extends Component {
  state = {loader: false};

  onSubmit = () => {
    this.setState({loader: true});

    API.request('createApp', 'POST', this.getFormData())
      .then(() => {
        window.setTimeout(() => this.setState({loader: false}), 1000)
      });
  };

  getFormData() {
    const formData = {...this.props.form};

    formData.status = formData.status ? 'active' : 'inactive';

    return formData;
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <NewAppPresentation
          close={this.props.close}
          loader={this.state.loader}
          appTextFields={
            <ApplicationTextFields/>
          }
          platformSelect={
            <PlatformSelect defaultSelected={'iOS'} selected={this.props.form.platform}/>
          }
          integrationSelect={
            <IntegrationSelect
              defaultSelected={'SDK'}
              integrationSelected={this.props.form.integration}
              availableIntegrations={['SDK', 'JS Tag', 'API']}
            />
          }
          statusField={
            <StatusField/>
          }
        />
      </form>
    );
  }
}

NewApp.propTypes = {
  close: PropTypes.func,
  form: PropTypes.object
};

const getFormValuesFromState = (state) => {
  if (!state || !state.form || !state.form.newapp || !state.form.newapp.values) {
    return {};
  }

  return state.form.newapp.values;
};

const mapStateToProps = state => ({
  form: getFormValuesFromState(state)
});

const connected = connect(mapStateToProps)(NewApp);

export default reduxForm({
  form: 'newapp',
  initialValues: {
    status: 'active'
  },
  validate,
})(connected);
