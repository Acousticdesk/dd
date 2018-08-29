import React from 'react';
import PropTypes from 'prop-types';

const Option = ({label, onOptionClick}) => (
  <li onClick={onOptionClick} className="option-item isCursorPointer">
    <div className="option-item__legend-container">
      <span className="text text--lead">{label}</span>
    </div>
  </li>
);

Option.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onOptionClick: PropTypes.func
};

const Options = ({options, onOptionClick}) => (
  options
    ? options.map((i, index) => (
      <Option key={index} label={i.label} onOptionClick={onOptionClick(i)} />
    ))
    : null
);

Options.propTypes = {
  options: PropTypes.array,
  onOptionClick: PropTypes.func,
};

export default Options;
