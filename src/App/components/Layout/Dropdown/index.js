import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toggle from './Toggle';
import Items from './Items';
import DropdownPresentational from './Presentation';

const stopPropagation = (evt) => evt.stopPropagation();

class Dropdown extends Component {
  state = {isFocused: false};

  componentDidMount() {
    document.body.addEventListener('click', this.close);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.close);
  }

  close = () => {
    this.setState({isFocused: false});
  };

  onToggle = () => {
    this.setState(prevState => {
      return {isFocused: !prevState.isFocused};
    });
  };

  render() {
    const {isFocused} = this.state;
    const activeClass = isFocused ? 'active' : '';
    const fullWidthClass = this.props.fullWidth ? 'dropdown__list--full-width' : '';

    return (
      <DropdownPresentational
        onClick={stopPropagation}
        activeClass={activeClass}
        fullWidthClass={fullWidthClass}
        toggle={
          <Toggle toggle={this.props.toggle} onClick={this.onToggle} />
        }
        items={
          <Items items={this.props.items} options={this.props.options} />
        }
      />
    );
  }
}

Dropdown.propTypes = {
  items: PropTypes.element,
  toggle: PropTypes.element,
  options: PropTypes.array,
  fullWidth: PropTypes.bool,
};

export default Dropdown;
