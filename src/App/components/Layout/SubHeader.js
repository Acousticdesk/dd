import React from 'react';
import PropTypes from 'prop-types';

const SubHeaderDesktop = ({onCreateAppClick}) => (
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
      <button onClick={onCreateAppClick} className="btn btn-regular btn-border-chetwod-blue color--chetwod-blue">New Application</button>
    </div>
  </div>
);

const SubHeaderMobile = ({onCreateAppClick}) => (
  <div className="l-sub-header-mobile">
    <div className="l-sub-header__side-col l-sub-header-mobile__search-container text-center isCursorPointer">
      <div className="search-mobile">
        <i className="icon icon-regular material-icons">search</i>
      </div>
    </div>
    <div className="l-sub-header-mobile__sort-container">
      <p className="color--grey">
        Sort By: Name
        <i className="material-icons">arrow_drop_down</i>
      </p>
    </div>
    <div
      onClick={onCreateAppClick}
      className="l-sub-header__side-col l-sub-header-mobile__cta-container text-center isCursorPointer"
    >
      <i className="icon icon-chetwod-blue-color material-icons">
        add
      </i>
    </div>
  </div>
);

SubHeaderDesktop.propTypes = {
  onCreateAppClick: PropTypes.func
};

const SubHeader = ({onCreateAppClick}) => {
  return (
    <React.Fragment>
      <SubHeaderDesktop onCreateAppClick={onCreateAppClick} />
      <SubHeaderMobile onCreateAppClick={onCreateAppClick} />
    </React.Fragment>
  );
};

SubHeader.propTypes = {
  onCreateAppClick: PropTypes.func
};

export default SubHeader;
