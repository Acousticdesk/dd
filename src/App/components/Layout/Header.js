import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../../../../static/assets/logo/@1x.png';
import logoWhite from '../../../../static/assets/logo/white.png';

import UserDropdown from './UserDropdown';

import { getIsMobileSidebarShown, mobileSidebarToggle } from '../../redux/ui/mobileSidebar';
import { getIsMobileViewport } from '../../redux/ui/mobileViewport';

const Header = ({userEmail, onUserLoggedOut, pageTitle, mobileSidebarToggle, isMobileViewport, isMobileSidebarShown}) => {
  const isDarkTheme = isMobileViewport && isMobileSidebarShown;

  return (
    <header className={`l-header ${isDarkTheme ? 'l-header--dark' : ''}`}>
      <div onClick={mobileSidebarToggle} className="l-header__logo-container text-center">
        <img className="l-header__logo" src={logo} width="22px" alt="Display.io"/>
        <img className="l-header__logo-white" src={logoWhite} width="22px" alt="Display.io" />
      </div>
      <div className="l-header__title-container">
        <h4 className="l-header__title heading heading--md heading--no-offset">{pageTitle}</h4>
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
  isMobileViewport: PropTypes.bool,
  isMobileSidebarShown: PropTypes.bool,
};

const mapStateToProps = state => ({
  isMobileViewport: getIsMobileViewport(state),
  isMobileSidebarShown: getIsMobileSidebarShown(state),
});

const mapDispatchToProps = dispatch => ({
  mobileSidebarToggle: bindActionCreators(mobileSidebarToggle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
