import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { appModalShow as appModalShowImport } from '../../../redux/ui/Applications/editing';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const SubHeader = ({ appModalShow }) => (
  <React.Fragment>
    <DesktopView onCreateAppClick={appModalShow} />
    <MobileView onCreateAppClick={appModalShow} />
  </React.Fragment>
);

SubHeader.defaultProps = {
  appModalShow: null,
};

SubHeader.propTypes = {
  appModalShow: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  appModalShow: bindActionCreators(appModalShowImport, dispatch),
});

export default connect(null, mapDispatchToProps)(SubHeader);
