import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { editApp, appModalClose } from '../../../redux/reducer';

import AppModal from '../../../components/Page/Applications/AppModal';

class AppModalContainer extends Component {
  render() {
    const {refreshAppsList, idAppEdit, appModalClose, isCreatingNewApp} = this.props;

    const app = this.props.getAppById(idAppEdit);
    const title = app ? 'Edit Application' : 'New Application';

    return isCreatingNewApp || idAppEdit
      ? (
        <AppModal
          refreshAppsList={refreshAppsList}
          close={appModalClose}
          app={app}
          title={title}/>
      )
      : null;
  }
}

AppModalContainer.propTypes = {
  editApp: PropTypes.func,
  idAppEdit: PropTypes.number,
  appModalClose: PropTypes.func,
  getAppById: PropTypes.func,
};

const mapStateToProps = (state) => ({
  idAppEdit: state.app.idAppEdit,
  isCreatingNewApp: state.app.isCreatingNewApp,
});

const mapDispatchToProps = (dispatch) => ({
  editApp: bindActionCreators(editApp, dispatch),
  appModalClose: bindActionCreators(appModalClose, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppModalContainer);
