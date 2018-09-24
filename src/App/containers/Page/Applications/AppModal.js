import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { editApp, appModalClose, getIdAppEdit, getIsCreatingNewApp } from '../../../redux/appEdit';

import AppModal from '../../../components/Page/Applications/AppModal';

class AppModalContainer extends Component {
  render() {

  }
}

AppModalContainer.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AppModalContainer);
