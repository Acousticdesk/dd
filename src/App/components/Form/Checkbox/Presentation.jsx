import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({
  classChecked,
  classSwitch,
  classLabel,
  classExtra,
  input,
  id,
  icon,
  isChecked,
  label,
  ...props
}) => (
  <React.Fragment>
    <span className={`checkbox-radio-common checkbox ${classChecked}`}>
      <input checked={isChecked} {...input} {...props} id={id} type="checkbox" />
      <label
        htmlFor={id}
        className={`
          checkbox-radio-common__ui
          ${classSwitch}
          color--white
          text-center
          material-icons
          isCursorPointer
          ${classExtra}
        `}
      >
        {icon}
      </label>
    </span>
    <label htmlFor={id} className={`color--grey ${classLabel} isCursorPointer`}>{label}</label>
  </React.Fragment>
);

Presentation.defaultProps = {
  classChecked: null,
  classSwitch: null,
  classLabel: null,
  classExtra: null,
  input: null,
  id: null,
  icon: null,
  isChecked: null,
  label: null,
};

Presentation.propTypes = {
  classChecked: PropTypes.string,
  classSwitch: PropTypes.string,
  classLabel: PropTypes.string,
  classExtra: PropTypes.string,
  input: PropTypes.shape(),
  id: PropTypes.string,
  icon: PropTypes.string,
  isChecked: PropTypes.bool,
  label: PropTypes.string,
};

export default Presentation;
