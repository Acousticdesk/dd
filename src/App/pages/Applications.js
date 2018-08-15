import React, { Component } from 'react';
import PropTypes from 'prop-types';

import logo from '../../../static/assets/logo/@1x.png';

import UserDropdown from '../components/UserDropdown';

const Applications = ({
     sideNavLinks,
     userEmail,
     onUserLoggedOut,
     appsList,
     showApplicationModal,
     placementEdit,
     createAppModal
  }) => {
  return (
    <React.Fragment>
      <div className="l-applications">
        <div>
          <nav className="sidenav">
            <ul>
              {sideNavLinks}
            </ul>
          </nav>
        </div>

        <div>
          <header className="l-header">
            <div className="l-header__logo-container text-center">
              <img src={logo} width="22px" alt="Display.io"/>
            </div>
            <div className="l-header__title-container">
              <h4 className="heading heading--med heading--no-offset">Applications</h4>
            </div>
            <div className="l-header__notifications-container text-center">
              <i className="icon icon-regular icon--notification material-icons isCursorPointer">notifications</i>
            </div>
            <div className="l-header__user-container text-center isCursorPointer">
              <UserDropdown email={userEmail} onItemClick={onUserLoggedOut}/>
            </div>
          </header>
          <div className="l-sub-header">
            <div className="l-sub-header__search-container">
              <div className="search-bar isRoundedBorders">
                <input className="color--grey-light" type="text" placeholder="Search apps by name, type..."/>
              </div>
            </div>
            <div className="l-sub-header__sort-container isCursorPointer">
              <p className="color--grey">
                Sort By: Name
                <i className="material-icons">arrow_drop_down</i>
              </p>
            </div>
            <div className="l-sub-header__cta-container">
              <button onClick={showApplicationModal} className="btn btn-regular btn-border-chetwod-blue color--chetwod-blue">New Application</button>
            </div>
          </div>
          <div className="l-applications-main">
            <div className="l-applications-main__apps-container">
              <ul className="l-applications-list">
                {appsList}
              </ul>
            </div>
            <div className="l-applications-main__side-bar">
              {placementEdit}
            </div>
          </div>
        </div>
      </div>
      {createAppModal}
    </React.Fragment>
  );
};

Applications.propTypes = {
  sideNavLinks: PropTypes.arrayOf(PropTypes.element),
  userEmail: PropTypes.string,
  onUserLoggedOut: PropTypes.func,
  appsList: PropTypes.arrayOf(PropTypes.element),
  showApplicationModal: PropTypes.func,
  placementEdit: PropTypes.element,
  createAppModal: PropTypes.element
};

export default Applications;
