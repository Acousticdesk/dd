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
import PlatformSelect from './PlatformSelect';

const integrations = {
  sdk: 'SDK',
  js: 'JS Tag',
  api: 'API'
};

const platforms = {
  ios: 'iOS',
  android: 'Android'
};

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

  getSelectedPlatform() {
    const {form, initialValues, app} = this.props;

    if (app) {
      return app.integration;
    }

    if (form.platform) {
      return form.platform;
    }

    return initialValues.platform;

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
            <PlatformSelect
              isDisabled={!!this.props.app}
              platforms={platforms}
              selected={this.getSelectedPlatform()}
            />
          }
          integrationSelect={
            <IntegrationSelect
              integrations={integrations}
              defaultSelected={this.props.initialValues.integration}
              integrationSelected={this.props.form.integration}
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
  form: PropTypes.object,
  app: PropTypes.object,
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
    status: 'active',
    platform: 'ios',
    integration: 'sdk'
  },
  validate,
})(connected);
