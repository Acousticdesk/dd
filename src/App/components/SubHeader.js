import React from 'react';
import PropTypes from 'prop-types';

const SubHeader = ({onCreateAppClick}) => {
  return (
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
};

SubHeader.propTypes = {
  onCreateAppClick: PropTypes.func
};

export default SubHeader;
