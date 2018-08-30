import React from 'react';

const withCustomOnChangeReduxForm = (WrappedComponent) => {
  const WithCustomOnChangeReduxForm = ({onChange, ...props}) => {
    const customOnChange = (evt) => {
      const inputReduxForm = props.input;

      if ((!inputReduxForm || !inputReduxForm.onChange) && !onChange) {
        return;
      }

      if (inputReduxForm.onChange && typeof inputReduxForm.onChange === 'function') {
        inputReduxForm.onChange(evt);
      }

      if (onChange && typeof inputReduxForm.onChange === 'function') {
        onChange(evt);
      }
    };

    return <WrappedComponent {...props} onChange={customOnChange} />
  };

  const getDisplayName = () => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  };

  WithCustomOnChangeReduxForm.displayName = `withCustomOnChange(${getDisplayName()})`;

  return WithCustomOnChangeReduxForm;
};

export default withCustomOnChangeReduxForm;
