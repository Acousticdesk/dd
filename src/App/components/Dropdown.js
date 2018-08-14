import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
  state = {isActive: false};

  onClick = () => {
    this.setState(prevState => {
      return {isActive: !prevState.isActive};
    });
  };

  onItemClick = (evt) => {
    if (this.props.onItemClick) {
      this.props.onItemClick(evt);
    }

    this.setState({
      isActive: false
    });
  };

  getActiveClass() {
    return this.state.isActive ? 'active' : '';
  }

  getFullWidthClass() {
    return this.props.fullWidth ? 'dropdown__list--full-width' : '';
  }

  render() {
    return (
      <div className={`dropdown ${this.getActiveClass()}`}>
        {
          this.props.Toggle
            ? React.cloneElement(this.props.Toggle, {
              onClick: this.onClick
            })
            : null
        }
        <ul className={`dropdown__list ${this.getFullWidthClass()}`}>
          {
            this.props.Items
              ? React.cloneElement(this.props.Items, {
                onItemClick: this.onItemClick
              })
              : this.props.items && this.props.items.map((i, index) => (
                <li data-value={i} key={index} onClick={this.onItemClick} className="option-item isCursorPointer">
                  {/*<div className="option-item__icon-container">*/}
                    {/*<i className="icon icon-regular icon--small material-icons">edit</i>*/}
                  {/*</div>*/}
                  <div className="option-item__legend-container">
                    <span className="text text--lead">{i}</span>
                  </div>
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  onItemClick: PropTypes.func,
  Items: PropTypes.element,
  Toggle: PropTypes.element.isRequired,
  items: PropTypes.array,
  fullWidth: PropTypes.bool
};

export default Dropdown;
