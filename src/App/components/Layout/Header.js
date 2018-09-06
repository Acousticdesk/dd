import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../../static/assets/logo/@1x.png';
import logoWhite from '../../../../static/assets/logo/white.png';

import UserDropdown from './UserDropdown';

const Header = ({userEmail, onUserLoggedOut, pageTitle, mobileSidebarToggle, isDarkTheme}) => {
  return (
    <header className={`l-header ${isDarkTheme ? 'l-header--dark' : ''}`}>
      <div onClick={mobileSidebarToggle} className="l-header__logo-container text-center">
        <img className="l-header__logo" src={logo} width="22px" alt="Display.io"/>
        <img className="l-header__logo-white" src={logoWhite} width="22px" alt="Display.io" />
      </div>
      <div className="l-header__title-container">
        <h4 className="l-header__title heading heading--med heading--no-offset">{pageTitle}</h4>
      </div>
      <div className="l-header__notifications-container text-center">
        <i className="
          l-header__notification-icon
          icon
          icon-regular
          icon--notification
          material-icons
          isCursorPointer
          "
        >
          notifications
        </i>
      </div>
      <div className="l-header__user-container text-center isCursorPointer">
        <UserDropdown email={userEmail} onLogOut={onUserLoggedOut}/>
      </div>
    </header>
  );
};

Header.propTypes = {
  userEmail: PropTypes.string,
  onUserLoggedOut: PropTypes.func,
  pageTitle: PropTypes.string,
  mobileSidebarToggle: PropTypes.func,
  isDarkTheme: PropTypes.bool,
};

export default Header;
