import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  state = {isActive: false};

  onClick = () => {
    this.setState(prevState => {
      return {isActive: !prevState.isActive};
    });
  };

  onItemClick = () => {
    if (this.props.onItemClick) {
      this.props.onItemClick();
    }

    this.setState({
      isActive: false
    });
  };

  getActiveClass() {
    return this.state.isActive ? 'active' : '';
  }

  render() {
    return (
      <div className={`dropdown ${this.getActiveClass()}`}>
        {React.cloneElement(this.props.Toggle, {
          onClick: this.onClick
        })}
        <ul className="dropdown__list">
          {React.cloneElement(this.props.Items, {
            onItemClick: this.onItemClick
          })}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onItemClick: PropTypes.func,
  Items: PropTypes.element.isRequired,
  Toggle: PropTypes.element.isRequired
};

export default Dropdown;
