import React from 'react';
import PropTypes from 'prop-types';

import HideIcon from '../../../../../static/assets/icons/hide-icon.svg';

const Icon = ({onShowPassword, isPasswordVisible}) => {
  if (!isPasswordVisible) {
    return (
      <HideIcon
        onClick={onShowPassword}
        className="input__icon material-icons isCursorPointer"
      />
    );
  }

  return (
    <i
      onClick={onShowPassword}
      className="input__icon material-icons isCursorPointer">
      remove_red_eye
    </i>
  );
};

Icon.propTypes = {
  onShowPassword: PropTypes.func,
  isPasswordVisible: PropTypes.bool
};

export default Icon;
