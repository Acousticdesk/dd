import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../../static/assets/logo/@1x.png';

import UserDropdown from './UserDropdown';

const Header = ({userEmail, onUserLoggedOut, pageTitle}) => {
  return (
    <header className="l-header">
      <div className="l-header__logo-container text-center">
        <img src={logo} width="22px" alt="Display.io"/>
      </div>
      <div className="l-header__title-container">
        <h4 className="heading heading--med heading--no-offset">{pageTitle}</h4>
      </div>
      <div className="l-header__notifications-container text-center">
        <i className="icon icon-regular icon--notification material-icons isCursorPointer">notifications</i>
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
  pageTitle: PropTypes.string
};

export default Header;
