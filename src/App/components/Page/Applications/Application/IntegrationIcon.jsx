import React from 'react';
import PropTypes from 'prop-types';

import AppleIcon from '../../../../../../static/assets/icons/apple.svg';


const IntegrationIcon = ({ platform }) => {
  switch (platform) {
    case 'ios':
      return <AppleIcon width="16px" height="16px" className="platform-select__icon" />;
    case 'android':
      return <i className="platform-select__icon icon icon--small icon-regular material-icons">android</i>;
    default:
      return null;
  }
};

IntegrationIcon.defaultProps = {
  platform: null,
};

IntegrationIcon.propTypes = {
  platform: PropTypes.string,
};

export default IntegrationIcon;
