import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ label, onOptionClick }) => (
  <li className="option-item-container">
    <div role="button" tabIndex="0" onKeyDown={onOptionClick} onClick={onOptionClick} className="option-item isCursorPointer">
      <div className="option-item__legend-container">
        <span className="text text--lead">{label}</span>
      </div>
    </div>
  </li>
);

Option.defaultProps = {
  label: null,
  onOptionClick: null,
};

Option.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onOptionClick: PropTypes.func,
};

const Options = ({ options, onOptionClick }) => (
  options
    ? options.map(i => (
      <Option key={i.label} label={i.label} onOptionClick={onOptionClick(i)} />
    ))
    : null
);

Options.defaultProps = {
  options: null,
  onOptionClick: null,
};

Options.propTypes = {
  options: PropTypes.arrayOf(),
  onOptionClick: PropTypes.func,
};

export default Options;
