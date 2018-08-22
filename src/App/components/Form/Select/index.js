import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../Layout/Dropdown/index';
import Toggle from './Toggle';

class InputDropdown extends Component {
  state = {value: null};

  onItemClick = (evt) => {
    evt.persist();
    this.setState({
      value: evt.currentTarget.dataset.value
    });
    if (this.props.onChange && typeof this.props.onChange === 'function') {
      this.props.onChange({name: this.props.name, value: evt.currentTarget.dataset.value});
    }
  };

  render() {
    return (
      <Dropdown
        fullWidth
        toggle={<Toggle value={this.state.value || this.props.value} label={this.props.label}/>}
        options={this.props.options}
        onItemClick={this.onItemClick}
      />
    );
  }
}

InputDropdown.propTypes = {
  options: PropTypes.array,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string.isRequired
};

export default InputDropdown;
