import React from 'react';
import PropTypes from 'prop-types';

import Presentation from './Presentation';

const Radio = ({
  input,
  checked,
  disabled,
  ...props
}) => {
  const id = `radio_${Math.random().toString(36).substr(2, 9)}`;
  const classChecked = checked ? 'selected' : '';
  const classDisabled = disabled ? 'checkbox-radio-common__ui--disabled' : '';
  const classLabelDisabled = disabled ? 'color--disabled' : 'color--dark isCursorPointer';
  const classLabelChecked = checked ? 'text-bold' : '';

  return (
    <Presentation
      {...props}
      id={id}
      input={input}
      classChecked={classChecked}
      classDisabled={classDisabled}
      classLabelChecked={classLabelChecked}
      classLabelDisabled={classLabelDisabled}
    />
  );
};

Radio.defaultProps = {
  input: null,
  checked: null,
  disabled: null,
};

Radio.propTypes = {
  input: PropTypes.shape(),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Radio;
