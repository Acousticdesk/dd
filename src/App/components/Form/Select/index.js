import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../Layout/Dropdown';
import Toggle from './Toggle';
import Options from './Options';

class Select extends Component {
  state = {optionSelected: null};

  onOptionClick = (optionSelected) => () => {
    this.setState({
      optionSelected
    });

    this.triggerReduxFormChange(optionSelected.value);

    if (this.props.onOptionSelected && typeof this.props.onOptionSelected === 'function') {
      this.props.onOptionSelected(optionSelected);
    }
  };

  triggerReduxFormChange(value) {
    const inputPropReduxForm = this.props.input;

    if (!inputPropReduxForm || typeof inputPropReduxForm.onChange !== 'function') {
      return;
    }

    inputPropReduxForm.onChange(value);
  }

  getLabelOfSelectedOption() {
    const {optionSelected} = this.state;

    return optionSelected && optionSelected.label;
  }

  getValue() {
    const labelSelected = this.getLabelOfSelectedOption();

    return labelSelected || this.getInitialValueFromReduxForm() || this.props.value || '';
  }

  getInitialValueFromReduxForm() {
    const valueReduxForm = this.props.input && this.props.input.value;

    if (!valueReduxForm) {
      return '';
    }

    const optionSelected = this.props.options.filter(o => o.value === valueReduxForm)[0];

    if (!optionSelected) {
      return '';
    }

    return optionSelected.label;
  }

  render() {
    const value = this.getValue();

    return (
      <Dropdown
        fullWidth
        toggle={
          <Toggle
            value={value}
            label={this.props.label}
          />
        }
        items={
          <Options onOptionClick={this.onOptionClick} options={this.props.options} />
        }
      />
    );
  }
}

Select.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  onOptionSelected: PropTypes.func,
};

export default Select;
