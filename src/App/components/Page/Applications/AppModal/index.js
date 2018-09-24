import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import API from '../../../../../API';

import NewAppPresentation from './Presentation';
import ApplicationTextFields from './ApplicationTextFields';
import IntegrationSelect from './IntegrationSelect';
import StatusField from './StatusField';
import PlatformSelect from './PlatformSelect';
import { appModalHide, getIsAppModalShow } from '../../../../redux/ui/appEdit';
import { appEdit } from '../../../../redux/data/appEdit';
import { getIdAppEdit } from '../../../../redux/data/appEdit';

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

  render() {
    const {refreshAppsList, idAppEdit, appModalHide, isCreatingNewApp, formValues} = this.props;

    const title = this.props.app ? 'Edit Application' : 'New Application';

    return isCreatingNewApp || idAppEdit
      ? (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <NewAppPresentation
            title={title}
            close={appModalHide}
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
  appEdit: PropTypes.func,
  idAppEdit: PropTypes.number,
  appModalHide: PropTypes.func,
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
    platform: app.platform,
    integration: app.integration,
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
  isCreatingNewApp: getIsAppModalShow(state),
});

const mapDispatchToProps = dispatch => ({
  appEdit: bindActionCreators(appEdit, dispatch),
  appModalHide: bindActionCreators(appModalHide, dispatch),
});

const reduxFormed = reduxForm({
  form: 'newapp',
  enableReinitialize: true,
})(NewApp);

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormed);
