import React from 'react';

const withCustomOnChangeReduxForm = (WrappedComponent) => {
  const WithCustomOnChangeReduxForm = ({ onChange, ...props }) => {
    const customOnChange = (evt) => {
      const inputReduxForm = props.input;

      if ((!inputReduxForm || !inputReduxForm.onChange) && !onChange) {
        return;
      }

      if (inputReduxForm && inputReduxForm.onChange && typeof inputReduxForm.onChange === 'function') {
        inputReduxForm.onChange(evt);
      }

      if (onChange) {
        onChange(evt);
      }
    };

    return <WrappedComponent {...props} onChange={customOnChange} />;
  };

  const getDisplayName = () => (WrappedComponent.displayName || WrappedComponent.name || 'Component');

  WithCustomOnChangeReduxForm.displayName = `withCustomOnChange(${getDisplayName()})`;

  return WithCustomOnChangeReduxForm;
};

export default withCustomOnChangeReduxForm;
