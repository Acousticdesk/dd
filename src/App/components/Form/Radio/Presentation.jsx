import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({
  id,
  classChecked,
  classDisabled,
  classLabelDisabled,
  classLabelChecked,
  input,
  label,
  ...props
}) => (
  <span className={`integration-select__option checkbox-radio-common radio ${classChecked}`}>
    <input {...props} {...input} id={id} />
    <label
      htmlFor={id}
      className={`
        checkbox-radio-common__ui
        radio__ui
        ${classDisabled}
      `}
    >
      <span />
    </label>
    <label
      htmlFor={id}
      className={`
        ${classLabelDisabled}
        ${classLabelChecked}
        va-middle
    `}
    >
      {label}
    </label>
  </span>
);

Presentation.defaultProps = {
  id: null,
  classChecked: null,
  classDisabled: null,
  classLabelDisabled: null,
  classLabelChecked: null,
  input: null,
  label: null,
};

Presentation.propTypes = {
  id: PropTypes.string,
  classChecked: PropTypes.string,
  classDisabled: PropTypes.string,
  classLabelDisabled: PropTypes.string,
  classLabelChecked: PropTypes.string,
  input: PropTypes.shape(),
  label: PropTypes.string,
};

export default Presentation;
