import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import dashboard from '../../../../static/assets/icons/dashboard.svg';
import apps from '../../../../static/assets/icons/apps.svg';
import reports from '../../../../static/assets/icons/reports.svg';
import downloads from '../../../../static/assets/icons/downloads.svg';
import documentation from '../../../../static/assets/icons/documentation.svg';
import { getIsMobileViewport } from '../../redux/ui/mobileViewport';
import { getIsMobileSidebarShown } from '../../redux/ui/mobileSidebar';

// getSidenav() {
//   const { isMobileViewport, isMobileSidebarShown } = this.props;
//   const show = isMobileViewport && isMobileSidebarShown;
//
//   return <Sidenav show={show} activeOne="Applications" />;
// }

const iconsArray = [
  { Dashboard: dashboard },
  { Applications: apps },
  { Reports: reports },
  { Downloads: downloads },
  { Documentation: documentation },
];

const Sidenav = ({ isMobileViewport, isMobileSidebarShown }) => {
  const show = isMobileViewport && isMobileSidebarShown;
  const activeOne = 'Applications';

  return (
    <nav className={`l-sidenav ${show ? 'show' : ''}`}>
      <ul>
        {
          iconsArray.map((icon) => {
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
          })
        }
      </ul>
    </nav>
  );
};

Sidenav.defaultProps = {
  isMobileViewport: null,
  isMobileSidebarShown: null,
};

Sidenav.propTypes = {
  isMobileViewport: PropTypes.bool,
  isMobileSidebarShown: PropTypes.bool,
};

const mapStateToProps = state => ({
  isMobileViewport: getIsMobileViewport(state),
  isMobileSidebarShown: getIsMobileSidebarShown(state),
});

export default connect(mapStateToProps)(Sidenav);
