import React, { Component } from 'react';

export default class Dropdown extends Component {
  state = {isActive: false};

  onClick = () => {
    this.setState(prevState => {
      return {isActive: !prevState.isActive};
    });
  };

  getActiveClass() {
    return this.state.isActive ? 'active' : '';
  }

  render() {
    return (
      <div className={`dropdown ${this.getActiveClass()}`}>
        <a onClick={this.onClick} href="javascript:void(0);" className={`options-btn ${this.getActiveClass()}`}>
          <i className="icon icon-regular material-icons is-cursor-pointer">more_vert</i>
        </a>
        <ul className="dropdown__list">
          <li className="option-item is-cursor-pointer">
            <div className="option-item__icon-container">
              <i className="icon icon-regular icon--small material-icons">edit</i>
            </div>
            <div className="option-item__legend-container">
              <span className="text text--lead">Edit</span>
            </div>
          </li>
          <li className="dropdown__item">
            <li className="option-item is-cursor-pointer">
              <div className="option-item__icon-container">
                <i className="icon icon-regular icon--small material-icons">delete</i>
              </div>
              <div className="option-item__legend-container">
                <span className="text text--lead">Delete</span>
              </div>
            </li>
          </li>
        </ul>
      </div>
    );
  }
};
