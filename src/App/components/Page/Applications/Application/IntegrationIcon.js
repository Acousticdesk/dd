import React from 'react';
import PropTypes from 'prop-types';

import AppleIcon from '../../../../../../static/assets/icons/apple.svg';


const IntegrationIcon = ({platform}) => {
  return (
    platform === 'ios'
      ? <AppleIcon width="16px" height="16px" className="platform-select__icon"/>
      : platform === 'android'
      ? <i className="platform-select__icon icon icon--small icon-regular material-icons">android</i>
      : null
  );
};

IntegrationIcon.propTypes = {
  platform: PropTypes.string
};

export default IntegrationIcon;
