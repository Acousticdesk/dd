import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({id, classChecked, classDisabled, classLabelDisabled, classLabelChecked, input, ...props}) => (
  <span className={`integration-select__option checkbox-radio-common radio ${classChecked}`}>
      <input {...props} {...input} id={id} />
      <label
        htmlFor={id}
        className={`
          checkbox-radio-common__ui
          radio__ui
          ${classDisabled}
        `}
      />
      <label
        htmlFor={id}
        className={`
          ${classLabelDisabled}
          ${classLabelChecked}
          va-middle
      `}>
        {props.label}
      </label>
    </span>
);

Presentation.propTypes = {
  id: PropTypes.string,
  classChecked: PropTypes.string,
  classDisabled: PropTypes.string,
  classLabelDisabled: PropTypes.string,
  classLabelChecked: PropTypes.string,
  input: PropTypes.object,
};

export default Presentation;
