import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toggle from './Toggle';
import Items from './Items';
import DropdownPresentational from './Presentation';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { isFocused: false };

    this.close = this.close.bind(this);
    this.closeOnEsc = this.closeOnEsc.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.close);
    document.body.addEventListener('keydown', this.closeOnEsc);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.close);
    document.body.removeEventListener('keydown', this.closeOnEsc);
  }

  onToggle(evt) {
    evt.stopPropagation();

    this.setState(prevState => ({ isFocused: !prevState.isFocused }));
  }

  close() {
    this.setState({ isFocused: false });
  }

  closeOnEsc(evt) {
    const ESC = 27;

    if (evt.which === ESC) {
      this.close();
    }
  }

  render() {
    const { isFocused } = this.state;
    const {
      fullWidth, toggle, items, options,
    } = this.props;
    const activeClass = isFocused ? 'active' : '';
    const fullWidthClass = fullWidth ? 'dropdown__list--full-width' : '';

    return (
      <DropdownPresentational
        activeClass={activeClass}
        fullWidthClass={fullWidthClass}
        toggle={
          <Toggle toggle={toggle} onClick={this.onToggle} />
        }
        items={
          <Items items={items} options={options} />
        }
      />
    );
  }
}

Dropdown.defaultProps = {
  items: null,
  toggle: null,
  options: null,
  fullWidth: null,
};

Dropdown.propTypes = {
  items: PropTypes.element,
  toggle: PropTypes.element,
  options: PropTypes.instanceOf(Array),
  fullWidth: PropTypes.bool,
};

export default Dropdown;
