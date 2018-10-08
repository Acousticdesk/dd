import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import API from '../../../../../API';

import NewAppPresentation from './Presentation/index';
import ApplicationTextFields from './ApplicationTextFields';
import IntegrationSelect from './IntegrationSelect';
import StatusField from './StatusField';
import PlatformSelect from './PlatformSelect/index';
import {
  appModalHide as appModalHideImport, getIsAppModalShow, loader as loaderImport, getLoaderState,
  getIdAppEdit,
} from '../../../../redux/ui/Applications/editing';
import { fetchApps, getAppById } from '../../../../redux/data/entities/apps';

const integrations = {
  sdk: 'SDK',
  js: 'JS Tag',
  api: 'API',
};

const platforms = {
  ios: 'iOS',
  android: 'Android',
};

class NewApp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.hideOnEsc = this.hideOnEsc.bind(this);
  }

  componentDidMount() {
    document.documentElement.addEventListener('keydown', this.hideOnEsc);
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('keydown', this.hideOnEsc);
  }

  onSubmit(values) {
    const {
      loader,
      app,
      refreshAppsList,
      appModalHide,
    } = this.props;

    loader(true);

    const endpoint = app ? 'updateApp' : 'createApp';
    const id = app && app.id;
    const body = { ...values };

    if (id) {
      body.id = id;
    }

    API.request(endpoint, 'POST', body)
      .then(() => {
        window.setTimeout(() => {
          loader(false);
          refreshAppsList()
            .then(() => appModalHide());
        }, 1000);
      });
  }

  hideOnEsc(evt) {
    const { appModalHide } = this.props;
    const ESC = 27;

    if (evt.which === ESC) {
      appModalHide();
    }
  }

  render() {
    const {
      appModalHide,
      isAppModalShow,
      formValues,
      app,
      handleSubmit,
      loaderState,
    } = this.props;

    const title = app ? 'Edit Application' : 'New Application';

    return isAppModalShow
      ? (
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <NewAppPresentation
            title={title}
            close={appModalHide}
            loader={loaderState}
            appTextFields={
              <ApplicationTextFields />
            }
            platformSelect={(
              <PlatformSelect
                isDisabled={!!app}
                platforms={platforms}
                selected={formValues.platform}
              />
            )}
            integrationSelect={(
              <IntegrationSelect
                isDisabled={!!app}
                integrations={integrations}
                integrationSelected={formValues.integration}
              />
            )}
            statusField={
              <StatusField />
            }
          />
        </form>
      )
      : null;
  }
}

NewApp.defaultProps = {
  app: null,
  refreshAppsList: null,
  appModalHide: null,
  loader: null,
  isAppModalShow: null,
  formValues: null,
  handleSubmit: null,
  loaderState: null,
};

NewApp.propTypes = {
  app: PropTypes.shape(),
  refreshAppsList: PropTypes.func,
  appModalHide: PropTypes.func,
  loader: PropTypes.func,
  isAppModalShow: PropTypes.bool,
  formValues: PropTypes.shape(),
  handleSubmit: PropTypes.func,
  loaderState: PropTypes.bool,
};

const selector = formValueSelector('newapp');

const getInitialFormValues = () => ({
  status: 'active',
  platform: 'ios',
  integration: 'sdk',
  name: '',
  package: '',
});

const getAppValues = (app) => {
  return {
    status: app.status,
    platform: app.platform,
    integration: app.integration,
    name: app.name,
    package: app.package,
  };
};

const getInitialValues = (app) => {
  if (!app) {
    return getInitialFormValues();
  }

  return getAppValues(app);
};

const mapStateToProps = (state) => {
  const appToEdit = getAppById(state)(getIdAppEdit(state));

  return {
    formValues: selector(state, 'status', 'platform', 'integration', 'name', 'package'),
    initialValues: getInitialValues(appToEdit),
    isAppModalShow: getIsAppModalShow(state),
    loaderState: getLoaderState(state),
    app: appToEdit,
  };
};

const mapDispatchToProps = dispatch => ({
  appModalHide: bindActionCreators(appModalHideImport, dispatch),
  loader: bindActionCreators(loaderImport, dispatch),
  refreshAppsList: bindActionCreators(fetchApps, dispatch),
});

const reduxFormed = reduxForm({
  form: 'newapp',
  enableReinitialize: true,
})(NewApp);

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormed);
