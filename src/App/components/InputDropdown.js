import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Dropdown from './Dropdown';
import Input from './Input';

const InputDropdownCaret = () => {
  return (
    <i
      className="input__icon material-icons">
      arrow_drop_down
    </i>
  );
};

const InputDropdownToggle = ({label, ...props}) => {
  return (
    <React.Fragment>
      <Input {...props} label={label} extraClass="isCursorPointer" readOnly icon={<InputDropdownCaret/>}/>
    </React.Fragment>
  );
};

class InputDropdown extends Component {
  state = {value: null};

  onItemClick = (evt) => {
    evt.persist();
    this.setState({
      value: evt.currentTarget.dataset.value
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (state.value) {
      return state;
    }

    return {
      ...state,
      value: props.defaultValue
    }
  }

  render() {
    return (
      <Dropdown
        fullWidth
        Toggle={<InputDropdownToggle value={this.state.value} label={this.props.label}/>}
        items={this.props.items}
        onItemClick={this.onItemClick}
      />
    );
  }
}

InputDropdown.propTypes = {
  items: PropTypes.array,
  defaultValue: PropTypes.string
};

export default InputDropdown;
