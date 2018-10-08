import React from 'react';
import PropTypes from 'prop-types';

const SubHeaderMobile = ({ onCreateAppClick }) => (
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
      role="button"
      tabIndex="0"
      onKeyDown={onCreateAppClick}
      onClick={onCreateAppClick}
      className="l-sub-header__side-col l-sub-header-mobile__cta-container text-center isCursorPointer"
    >
      <i className="icon icon-chetwod-blue-color material-icons">
        add
      </i>
    </div>
  </div>
);

SubHeaderMobile.defaultProps = {
  onCreateAppClick: null,
};

SubHeaderMobile.propTypes = {
  onCreateAppClick: PropTypes.func,
};

export default SubHeaderMobile;
