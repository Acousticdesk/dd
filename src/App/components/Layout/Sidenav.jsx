import React from 'react';
import PropTypes from 'prop-types';

import dashboard from '../../../../static/assets/icons/dashboard.svg';
import apps from '../../../../static/assets/icons/apps.svg';
import reports from '../../../../static/assets/icons/reports.svg';
import downloads from '../../../../static/assets/icons/downloads.svg';
import documentation from '../../../../static/assets/icons/documentation.svg';

const iconsArray = [
  { Dashboard: dashboard },
  { Applications: apps },
  { Reports: reports },
  { Downloads: downloads },
  { Documentation: documentation },
];

const createLinks = activeOne => iconsArray.map((icon) => {
  const label = Object.keys(icon)[0];
  const IconComponent = icon[label];
  const activeClass = label === activeOne ? 'active' : '';

  return (
    <li key={label} className={`l-sidenav__item l-sidenav__item--${label} ${activeClass} isCursorPointer`}>
      <button type="button" className="l-sidenav__link">
        <IconComponent />
        <span className="l-sidenav__label text--big">{label}</span>
      </button>
    </li>
  );
});

const Sidenav = ({
  activeOne,
  show,
}) => (
  <nav className={`l-sidenav ${show ? 'show' : ''}`}>
    <ul>
      {createLinks(activeOne)}
    </ul>
  </nav>
);

Sidenav.defaultProps = {
  activeOne: null,
  show: null,
};

Sidenav.propTypes = {
  activeOne: PropTypes.string,
  show: PropTypes.bool,
};

export default Sidenav;
