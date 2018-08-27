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

  render() {
    return (
      <Fragment>
        <Dropdown
          fullWidth
          toggle={
            <Toggle
              value={this.state.selected && this.state.selected.label || this.props.value || ''}
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
