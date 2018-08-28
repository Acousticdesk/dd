import React from 'react';
import PropTypes from 'prop-types';

import AppleIcon from '../../../../../../../static/assets/icons/apple.svg';

const PlatformIcon = ({platform}) => {
  return (
    platform === 'ios'
      ? <AppleIcon className="platform-select__icon"/>
      : <i className="platform-select__icon icon icon--large icon-regular material-icons">android</i>
  );
};

PlatformIcon.propTypes = {
  platform: PropTypes.string
};

export default PlatformIcon;
