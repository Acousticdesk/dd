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
import { appModalHide, getIsAppModalShow, loader, getLoaderState } from '../../../../redux/ui/Applications/appEdit';
import { appEdit } from '../../../../redux/data/Applications/appEdit';

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
  onSubmit = (values) => {
    this.props.loader(true);

    const endpoint = this.props.app ? 'updateApp' : 'createApp';
    const id = this.props.app && this.props.app.id;
    const body = {...values};

    if (id) {
      body.id = id;
    }

    API.request(endpoint, 'POST', body)
      .then(() => {
        window.setTimeout(() => {
          this.props.loader(false);
          this.props.refreshAppsList()
            .then(() => this.props.appModalHide());
        }, 1000)
      });
  };

  componentDidMount() {
    document.documentElement.addEventListener('keydown', this.hideOnEsc);
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('keydown', this.hideOnEsc);
  }

  hideOnEsc = (evt) => {
    const ESC = 27;

    if (evt.which === ESC) {
      this.props.appModalHide();
    }
  };

  render() {
    const {appModalHide, isAppModalShow, formValues} = this.props;

    const title = this.props.app ? 'Edit Application' : 'New Application';

    return isAppModalShow
      ? (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <NewAppPresentation
            title={title}
            close={appModalHide}
            loader={this.props.loaderState}
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
  appModalHide: PropTypes.func,
  getAppById: PropTypes.func,
  loader: PropTypes.func,
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
  isAppModalShow: getIsAppModalShow(state),
  loaderState: getLoaderState(state),
});

const mapDispatchToProps = dispatch => ({
  appEdit: bindActionCreators(appEdit, dispatch),
  appModalHide: bindActionCreators(appModalHide, dispatch),
  loader: bindActionCreators(loader, dispatch),
});

const reduxFormed = reduxForm({
  form: 'newapp',
  enableReinitialize: true,
})(NewApp);

export default connect(mapStateToProps, mapDispatchToProps)(reduxFormed);
