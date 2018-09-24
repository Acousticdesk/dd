import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { appModalShow } from '../../../redux/ui/appEdit';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const SubHeader = ({appModalShow}) => {
  return (
    <React.Fragment>
      <DesktopView onCreateAppClick={appModalShow} />
      <MobileView onCreateAppClick={appModalShow} />
    </React.Fragment>
  );
};

SubHeader.propTypes = {
  appModalShow: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  appModalShow: bindActionCreators(appModalShow, dispatch)
});

export default connect(null, mapDispatchToProps)(SubHeader);
