import React from 'react';

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

const createLinks = () => {
  return iconsArray.map((icon, index) => {
    const iconName = Object.keys(icon)[0];
    const IconComponent = icon[iconName];
    const activeClass = iconName === 'apps' ? 'active' : '';
    return (
      <li key={index} className={`item item--${iconName} ${activeClass}`}>
        <a href="javascript:void(0);">
          <IconComponent/>
        </a>
      </li>
    );
  })
};

const Sidenav = () => {
  return (
    <nav className="sidenav">
      <ul>
        {createLinks()}
      </ul>
    </nav>
  );
};

export default Sidenav;
