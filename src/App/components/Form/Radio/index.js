import React from 'react';
import PropTypes from 'prop-types';

import Presentation from './Presentation';

const Radio = ({input, ...props}) => {
  const id = 'radio_' + Math.random().toString(36).substr(2, 9);
  const classChecked = props.checked ? 'selected' : '';
  const classDisabled = props.disabled ? 'checkbox-radio-common__ui--disabled': '';
  const classLabelDisabled = props.disabled ? 'color--disabled' : 'color--dark isCursorPointer';
  const classLabelChecked = props.checked ? 'text-bold' : '';

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

Radio.propTypes = {
  input: PropTypes.object,
};

export default Radio;
