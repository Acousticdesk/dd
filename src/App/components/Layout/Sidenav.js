import React from 'react';
import PropTypes from 'prop-types';

import open from '../../../../static/assets/icons/open.svg';
import dashboard from '../../../../static/assets/icons/dashboard.svg';
import apps from '../../../../static/assets/icons/apps.svg';
import reports from '../../../../static/assets/icons/reports.svg';
import downloads from '../../../../static/assets/icons/downloads.svg';
import documentation from '../../../../static/assets/icons/documentation.svg';

const iconsArray = [
  {open},
  {dashboard},
  {apps},
  {reports},
  {downloads},
  {documentation}
];

const createLinks = (activeOne) => {
  return iconsArray.map((icon, index) => {
    const iconName = Object.keys(icon)[0];
    const IconComponent = icon[iconName];
    const activeClass = iconName === activeOne ? 'active' : '';
    return (
      <li key={index} className={`item item--${iconName} ${activeClass}`}>
        <a href="javascript:void(0);">
          <IconComponent/>
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
