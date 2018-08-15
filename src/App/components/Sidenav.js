import React from 'react';
import PropTypes from 'prop-types';

const Sidenav = ({sideNavLinks}) => {
  return (
    <nav className="sidenav">
      <ul>
        {sideNavLinks}
      </ul>
    </nav>
  );
};

Sidenav.propTypes = {
  sideNavLinks: PropTypes.arrayOf(PropTypes.element)
};

export default Sidenav;
