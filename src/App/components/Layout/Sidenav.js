import React from 'react';
import PropTypes from 'prop-types';

import dashboard from '../../../../static/assets/icons/dashboard.svg';
import apps from '../../../../static/assets/icons/apps.svg';
import reports from '../../../../static/assets/icons/reports.svg';
import downloads from '../../../../static/assets/icons/downloads.svg';
import documentation from '../../../../static/assets/icons/documentation.svg';

const iconsArray = [
  {'Dashboard': dashboard},
  {'Applications': apps},
  {'Reports': reports},
  {'Downloads': downloads},
  {'Documentation': documentation}
];

const createLinks = (activeOne) => {
  return iconsArray.map((icon, index) => {
    const label = Object.keys(icon)[0];
    const IconComponent = icon[label];
    const activeClass = label.toLowerCase() === activeOne ? 'active' : '';
    return (
      <li key={index} className={`sidenav__item sidenav__item--${label} ${activeClass} isCursorPointer`}>
        <a className="sidenav__link" href="javascript:void(0);">
          <IconComponent/>
          <span className="sidenav__label text--big">{label}</span>
        </a>
      </li>
    );
  })
};

const Sidenav = ({activeOne}) => {
  return (
    <nav className="sidenav">
      <ul>
        {createLinks(activeOne)}
      </ul>
    </nav>
  );
};

Sidenav.propTypes = {
  activeOne: PropTypes.string
};

export default Sidenav;
