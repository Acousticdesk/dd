import React from 'react';

import open from '../../../static/assets/icons/open.svg';
import dashboard from '../../../static/assets/icons/dashboard.svg';
import apps from '../../../static/assets/icons/apps.svg';
import reports from '../../../static/assets/icons/reports.svg';
import downloads from '../../../static/assets/icons/downloads.svg';
import documentation from '../../../static/assets/icons/documentation.svg';

const iconsArray = [
  {open},
  {dashboard},
  {apps},
  {reports},
  {downloads},
  {documentation}
];

export default () => {
  return (
    <div className="l-applications">
      <div>
        <nav className="sidenav">
          <ul>
            {
              iconsArray.map(icon => {
                const iconName = Object.keys(icon)[0];
                const activeClass = iconName === 'apps' ? 'active' : '';
                return (
                  <li className={`item item--${iconName} ${activeClass}`}>
                    <a
                      href="javascript:void(0);"
                      dangerouslySetInnerHTML={{__html: icon[iconName]}}
                    />
                  </li>
                );
              })
            }
          </ul>
        </nav>
      </div>

      <div/>
    </div>
  );
};
