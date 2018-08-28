import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
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

  onSubmit = (values) => {
    this.setState({loader: true});

    const endpoint = this.props.app ? 'updateApp' : 'createApp';
    const id = this.props.app && this.props.app.id;
    const body = {...values};

    if (id) {
      body.id = id;
    }

    API.request(endpoint, 'POST', body)
      .then(() => {
        window.setTimeout(() => this.setState({loader: false}), 1000)
      });
  };

  getSelectedPlatform() {
    const {formValues, initialValues, app} = this.props;

    if (app) {
      return app.integration;
    }

    if (formValues.platform) {
      return formValues.platform;
    }

    return initialValues.platform;

  }

  getSelectedIntegration() {
    const { formValues, initialValues, app} = this.props;

    if (app) {
      return 'sdk';
    }

    if (formValues.integration) {
      return formValues.integration;
    }

    return initialValues.integration;
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <NewAppPresentation
          title={this.props.title}
          close={this.props.close}
          loader={this.state.loader}
          appTextFields={
            <ApplicationTextFields />
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
              isDisabled={!!this.props.app}
              integrations={integrations}
              integrationSelected={this.getSelectedIntegration()}
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
  app: PropTypes.object,
  title: PropTypes.string,
};

const selector = formValueSelector('newapp');

const getInitialFormValues = () => ({
  status: 'active',
  platform: 'ios',
  integration: 'sdk',
  name: '',
  package: ''
});

const getAppValues = (app) => ({
  status: app.status,
  platform: app.integration,
  integration: 'sdk',
  name: app.name,
  package: app.package
});

const getInitialValues = (props) => {
  if (!props.app) {
    return getInitialFormValues();
  }

  return getAppValues(props.app);
};

const mapStateToProps = (state, props) => ({
  formValues: selector(state, 'status', 'platform', 'integration', 'name', 'package'),
  initialValues: getInitialValues(props),
});

const reduxFormed = reduxForm({
  form: 'newapp',
  validate,
})(NewApp);

export default connect(mapStateToProps)(reduxFormed);
