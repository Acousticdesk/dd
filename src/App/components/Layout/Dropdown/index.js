import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toggle from './Toggle';
import Items from './Items';
import DropdownPresentational from './Presentation';

const stopPropagation = (evt) => evt.stopPropagation();

class Dropdown extends Component {
  state = {isActive: false};

  close = () => {
    this.setState({isActive: false});
  };

  componentDidMount() {
    document.body.addEventListener('click', this.close);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.close);
  }

  onToggle = () => {
    this.setState(prevState => {
      return {isActive: !prevState.isActive};
    });
  };

  onOptionClick = (item) => () => {
    if (this.props.onItemClick) {
      this.props.onItemClick(item);
    }

    this.setState({
      isActive: false
    });
  };

  render() {
    const activeClass = this.state.isActive ? 'active' : '';
    const fullWidthClass = this.props.fullWidth ? 'dropdown__list--full-width' : '';

    return (
      <DropdownPresentational
        onClick={stopPropagation}
        activeClass={activeClass}
        fullWidthClass={fullWidthClass}
        toggle={
          <Toggle toggle={this.props.toggle} onClick={this.onToggle}/>
        }
        items={
          <Items onItemClick={this.onOptionClick} items={this.props.items} options={this.props.options}/>
        }
      />
    );
  }
}

Dropdown.propTypes = {
  onItemClick: PropTypes.func,
  items: PropTypes.element,
  toggle: PropTypes.element.isRequired,
  options: PropTypes.array,
  fullWidth: PropTypes.bool
};

export default Dropdown;
