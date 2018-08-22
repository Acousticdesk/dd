import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({onClick}) => {
  const onToggleClick = (e) => {
    e.persist();
    e.stopPropagation();
    onClick && onClick(e);
  };

  return (
    <a onClick={onToggleClick} href="javascript:void(0);" className="options-btn">
      <i className="icon icon-regular material-icons isCursorPointer">more_vert</i>
    </a>
  );
};

Toggle.propTypes = {
  onClick: PropTypes.func
};

export default Toggle;
