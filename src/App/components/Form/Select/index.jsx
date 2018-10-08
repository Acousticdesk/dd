import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../Layout/Dropdown/index';
import Toggle from './Toggle';
import Options from './Options';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = { optionSelected: null };

    this.onOptionClick = this.onOptionClick.bind(this);
  }

  onOptionClick(optionSelected) {
    const { onOptionSelected } = this.props;

    return () => {
      this.setState({
        optionSelected,
      });

      this.triggerReduxFormChange(optionSelected.value);

      if (onOptionSelected && typeof onOptionSelected === 'function') {
        onOptionSelected(optionSelected);
      }
    };
  }

  getLabelOfSelectedOption() {
    const { optionSelected } = this.state;

    return optionSelected && optionSelected.label;
  }

  getValue() {
    const { value } = this.props;
    const labelSelected = this.getLabelOfSelectedOption();

    return labelSelected || this.getInitialValueFromReduxForm() || value || '';
  }

  getInitialValueFromReduxForm() {
    const { input, options } = this.props;

    const valueReduxForm = input && input.value;

    if (!valueReduxForm) {
      return '';
    }

    const optionSelected = options.filter(o => o.value === valueReduxForm)[0];

    if (!optionSelected) {
      return '';
    }

    return optionSelected.label;
  }

  triggerReduxFormChange(value) {
    const { input } = this.props;
    const inputPropReduxForm = input;

    if (!inputPropReduxForm || typeof inputPropReduxForm.onChange !== 'function') {
      return;
    }

    inputPropReduxForm.onChange(value);
  }

  render() {
    const value = this.getValue();
    const { options, label } = this.props;

    return (
      <Dropdown
        fullWidth
        toggle={(
          <Toggle
            value={value}
            label={label}
          />
        )}
        items={
          <Options onOptionClick={this.onOptionClick} options={options} />
        }
      />
    );
  }
}

Select.defaultProps = {
  options: null,
  label: null,
  onOptionSelected: null,
  input: null,
  value: null,
};

Select.propTypes = {
  options: PropTypes.arrayOf(),
  value: PropTypes.string,
  label: PropTypes.string,
  onOptionSelected: PropTypes.func,
  input: PropTypes.shape(),
};

export default Select;
