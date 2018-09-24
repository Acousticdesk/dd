import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import API from '../../../../../API';

import NewAppPresentation from './Presentation';
import ApplicationTextFields from './ApplicationTextFields';
import IntegrationSelect from './IntegrationSelect';
import StatusField from './StatusField';
import PlatformSelect from './PlatformSelect';
import {appModalClose, editApp, getIdAppEdit, getIsCreatingNewApp} from '../../../../redux/appEdit';

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
        window.setTimeout(() => {
          this.setState({loader: false});
          this.props.refreshAppsList()
            .then(() => this.props.close());
        }, 1000)
      });
  };

  // getSelectedPlatform() {
  //   const {formValues, initialValues, app} = this.props;
  //
  //   if (app) {
  //     return app.platform;
  //   }
  //
  //   if (formValues.platform) {
  //     return formValues.platform;
  //   }
  //
  //   return initialValues.platform;
  //
  // }

  // getSelectedIntegration() {
  //   const { formValues, initialValues, app} = this.props;
  //
  //   if (app) {
  //     return 'sdk';
  //   }
  //
  //   if (formValues.integration) {
  //     return formValues.integration;
  //   }
  //
  //   return initialValues.integration;
  // }

  render() {
    const {refreshAppsList, idAppEdit, appModalClose, isCreatingNewApp, formValues} = this.props;

    const title = this.props.app ? 'Edit Application' : 'New Application';
    
    return isCreatingNewApp || idAppEdit
      ? (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <NewAppPresentation
            title={title}
            close={appModalClose}
            loader={this.state.loader}
            appTextFields={
              <ApplicationTextFields />
            }
            platformSelect={
              <PlatformSelect
                isDisabled={!!this.props.app}
                platforms={platforms}
                selected={formValues.platform}
              />
            }
            integrationSelect={
              <IntegrationSelect
                isDisabled={!!this.props.app}
                integrations={integrations}
                integrationSelected={formValues.integration}
              />
            }
            statusField={
              <StatusField/>
            }
          />
        </form>
      )
      : null;
  }
}

NewApp.propTypes = {
  close: PropTypes.func,
  app: PropTypes.object,
  title: PropTypes.string,
  refreshAppsList: PropTypes.func,
  editApp: PropTypes.func,
  idAppEdit: PropTypes.number,
  appModalClose: PropTypes.func,
  getAppById: PropTypes.func,
};

const selector = formValueSelector('newapp');

const getInitialFormValues = () => ({
  status: 'active',
  platform: 'ios',
  integration: 'sdk',
  name: '',
  package: ''
});

const getAppValues = (app) => {
  return {
    status: app.status,
    platform: app.integration,
    integration: 'sdk',
    name: app.name,
    package: app.package,
  }
};

const getInitialValues = (props) => {
  if (!props.app) {
    return getInitialFormValues();
  }

  return getAppValues(props.app);
};

const mapStateToProps = (state, props) => ({
  formValues: selector(state, 'status', 'platform', 'integration', 'name', 'package'),
  initialValues: getInitialValues(props),
  idAppEdit: getIdAppEdit(state),
  isCreatingNewApp: getIsCreatingNewApp(state),
});

const mapDispatchToProps = dispatch => ({
  editApp: bindActionCreators(editApp, dispatch),
  appModalClose: bindActionCreators(appModalClose, dispatch),
});

const reduxFormed = reduxForm({
  form: 'newapp',
  enableReinitialize: true,
})(NewApp);

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormed);
