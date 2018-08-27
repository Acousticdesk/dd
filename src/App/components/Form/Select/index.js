import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../Layout/Dropdown/index';
import Toggle from './Toggle';

class Select extends Component {
  state = {selected: null};

  onItemClick = (selected) => {
    this.setState({
      selected
    });

    this.triggerReduxFormChange(selected.value);
  };

  triggerReduxFormChange(value) {
    if (!this.props.input || typeof this.props.input.onChange !== 'function') {
      return;
    }

    this.props.input.onChange(value);
  }

  getValue() {
    const selectedLabel = this.state.selected && this.state.selected.label;
    return selectedLabel || this.getInitialValueFromReduxForm() || this.props.value || '';
  }

  getInitialValueFromReduxForm() {
    const initialValue = this.props.input && this.props.input.value;

    if (!initialValue) {
      return;
    }

    const selected = this.props.options.filter(o => o.value === initialValue)[0];

    if (!selected) {
      return '';
    }

    return selected.label;
  }

  render() {
    return (
      <Fragment>
        <Dropdown
          fullWidth
          toggle={
            <Toggle
              value={this.getValue()}
              label={this.props.label}
            />
          }
          options={this.props.options}
          onItemClick={this.onItemClick}
        />
      </Fragment>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Select;
