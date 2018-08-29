import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({classChecked, classSwitch, classLabel, classExtra, input, id, icon, isChecked, ...props}) => {
  return (
    <React.Fragment>
      <span className={`checkbox-radio-common checkbox ${classChecked}`}>
        <input checked={isChecked} {...input} {...props} id={id} type="checkbox"/>
        <label htmlFor={id}
               className={`
            checkbox-radio-common__ui
            ${classSwitch}
            color--white
            text-center
            material-icons
            isCursorPointer
            ${classExtra}
          `}>
          {icon}
        </label>
      </span>
      <label htmlFor={id} className={`color--grey ${classLabel} isCursorPointer`}>{props.label}</label>
    </React.Fragment>
  );
};

Presentation.propTypes = {
  classChecked: PropTypes.string,
  classSwitch: PropTypes.string,
  classLabel: PropTypes.string,
  classExtra: PropTypes.string,
  input: PropTypes.object,
  id: PropTypes.string,
  icon: PropTypes.string,
  isChecked: PropTypes.bool,
};

export default Presentation;
