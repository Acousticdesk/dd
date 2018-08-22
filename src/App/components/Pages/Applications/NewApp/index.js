import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import API from '../../../../../API';
import NewAppPresentation from './Presentation/index';
import ApplicationTextFields from './ApplicationTextFields';
import IntegrationSelect from './IntegrationSelect';
import StatusField from './StatusField';

class NewApp extends Component {
  state = {loader: false};

  onSubmit = () => {
    this.setState({loader: true});
    API.request('createApp', 'POST', this.props.form)
      .then(() => {
        window.setTimeout(() => this.setState({loader: false}), 1000)
      });
  };

  onPlatformChange = (platform) => {
    // this.setState({platform})
  };

  onStatusChange = () => {
    // this.setState(state => ({
    //   status: state.status === 'active' ? 'inactive' : 'active'
    // }))
  };

  onAppTextFieldsChange = ({name, value}) => {
    // this.setState({
    //   [name]: value
    // });
  };

  render() {
    return (
      <NewAppPresentation
        close={this.props.close}
        onPlatformChange={this.onPlatformChange}
        integrationSelect={<IntegrationSelect
          integrationSelected={this.props.form.integration}
          availableIntegrations={['SDK', 'JS Tag', 'API']}
        />}
        appTextFields={<ApplicationTextFields/>}
        statusField={<StatusField
          onStatusChange={this.onStatusChange}
          isActiveStatus={this.props.form.status === 'active'}
        />}
        loader={this.state.loader}
        onSubmit={this.onSubmit}
      />
    );
  }
}

NewApp.propTypes = {
  close: PropTypes.func,
  form: PropTypes.object
};

const getFormValuesFromState = (state) => {
  return {};
};
//
const mapStateToProps = (state) => ({
  form: getFormValuesFromState(state)
});

const connected = connect(mapStateToProps)(NewApp);

export default reduxForm({
  form: 'newapp'
})(connected);
