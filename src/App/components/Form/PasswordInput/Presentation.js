import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({onChange, type, passwordVisibleClass, onShowPassword}) => {
  return (
    <div className="password-input input">
      <input
        name="password"
        onChange={onChange}
        type={type}
        className="input__field"
        placeholder="Password it like a boss"/>
      <i
        onClick={onShowPassword}
        className={`input__icon ${passwordVisibleClass} material-icons isCursorPointer`}>
        remove_red_eye
      </i>
    </div>
  );
};

Presentation.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.string,
  passwordVisibleClass: PropTypes.string,
  onShowPassword: PropTypes.func
};

export default Presentation;
