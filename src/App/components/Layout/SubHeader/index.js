import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createApp } from '../../../redux/appEdit';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const SubHeader = ({createApp}) => {
  return (
    <React.Fragment>
      <DesktopView onCreateAppClick={createApp} />
      <MobileView onCreateAppClick={createApp} />
    </React.Fragment>
  );
};

SubHeader.propTypes = {
  createApp: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  createApp: bindActionCreators(createApp, dispatch)
});

export default connect(null, mapDispatchToProps)(SubHeader);
