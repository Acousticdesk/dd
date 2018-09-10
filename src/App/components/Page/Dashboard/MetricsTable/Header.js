import React from 'react';
import PropTypes from 'prop-types';

import OpenIcon from '../../../../../../static/assets/icons/open.svg';

const Header = () => {
    return (
      <div className="metrics-table-head">
        <div className="metrics-table-head__controls-container">
          <p className="text-lead">
            Top performance by
            <span className="isCursorPointer">
              <span className="text-bold"> eCPM</span>
              <i className="material-icons icon icon--small text-bold">arrow_drop_down</i>
            </span>
          </p>
        </div>
        <div className="metrics-table-head__icon-container">
          <OpenIcon className="svg-icon isCursorPointer"/>
        </div>
      </div>
    );
};

Header.propTypes = {

};

export default Header;
