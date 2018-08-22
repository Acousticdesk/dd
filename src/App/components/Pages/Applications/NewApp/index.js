import React, { Component } from 'react';
import PropTypes from 'prop-types';

import API from '../../../../API';
import NewAppPresentation from './Presentation/index';
import ApplicationTextFields from './ApplicationTextFields';
import IntegrationSelect from './IntegrationSelect';
import StatusField from './StatusField';

class NewApp extends Component {
  state = {status: 'active', integration: null, platform: null, loader: false};

  create = () => {
    this.setState({loader: true});
    API.request('createApp', 'POST', this.state)
      .then(() => {
        window.setTimeout(() => this.setState({loader: false}), 1000)
      });
  };

  onPlatformChange = (platform) => {
    this.setState({platform})
  };

  onIntegrationChange = ({value}) => {
    this.setState({integration: value});
  };

  onStatusChange = () => {
    this.setState(state => ({
      status: state.status === 'active' ? 'inactive' : 'active'
    }))
  };

  onAppTextFieldsChange = ({name, value}) => {
    this.setState({
      [name]: value
    });
  };

  getIntegrationSelect() {
    return (
      <IntegrationSelect
        onIntegrationChange={this.onIntegrationChange}
        integrationSelected={this.state.integration}
        availableIntegrations={['SDK', 'JS Tag', 'API']}
      />
    );
  }

  getStatusField() {
    return (
      <StatusField
        onStatusChange={this.onStatusChange}
        isActiveStatus={this.state.status === 'active'}
      />
    );
  }

  getAppTextFields() {
    return <ApplicationTextFields onAppTextFieldChange={this.onAppTextFieldsChange}/>;
  }

  render() {
    return (
      <NewAppPresentation
        close={this.props.close}
        onPlatformChange={this.onPlatformChange}
        integrationSelect={this.getIntegrationSelect()}
        appTextFields={this.getAppTextFields()}
        statusField={this.getStatusField()}
        createApp={this.create}
        loader={this.state.loader}
      />
    );
  }
}

NewApp.propTypes = {
  close: PropTypes.func
};

export default NewApp;
