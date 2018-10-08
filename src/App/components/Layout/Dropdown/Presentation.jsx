import React from 'react';
import PropTypes from 'prop-types';

const DropdownPresentational = ({
  activeClass,
  fullWidthClass,
  items,
  toggle,
}) => (
  <div className={`dropdown ${activeClass}`}>
    {toggle}
    <ul className={`dropdown__list ${fullWidthClass}`}>
      {items}
    </ul>
  </div>
);

DropdownPresentational.defaultProps = {
  activeClass: null,
  fullWidthClass: null,
  toggle: null,
  items: null,
};

DropdownPresentational.propTypes = {
  activeClass: PropTypes.string,
  fullWidthClass: PropTypes.string,
  toggle: PropTypes.element,
  items: PropTypes.element,
};

export default DropdownPresentational;
