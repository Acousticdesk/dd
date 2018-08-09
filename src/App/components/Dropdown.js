import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  state = {isActive: false};

  onClick = () => {
    this.setState(prevState => {
      return {isActive: !prevState.isActive};
    });
  };

  onEditClick = () => {
    this.props.onEditClick();
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
        <a onClick={this.onClick} href="javascript:void(0);" className={`options-btn ${this.getActiveClass()}`}>
          <i className="icon icon-regular material-icons isCursorPointer">more_vert</i>
        </a>
        <ul className="dropdown__list">
          <li onClick={this.onEditClick} className="option-item isCursorPointer">
            <div className="option-item__icon-container">
              <i className="icon icon-regular icon--small material-icons">edit</i>
            </div>
            <div className="option-item__legend-container">
              <span className="text text--lead">Edit</span>
            </div>
          </li>
          <li className="dropdown__item">
            <div className="option-item isCursorPointer">
              <div className="option-item__icon-container">
                <i className="icon icon-regular icon--small material-icons">delete</i>
              </div>
              <div className="option-item__legend-container">
                <span className="text text--lead">Delete</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onEditClick: PropTypes.func.isRequired
};

export default Dropdown;
