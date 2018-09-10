import React from 'react';
import PropTypes from 'prop-types';

import appIcon from '../../../../../../../static/assets/applications-page/app-placeholder.png';

const AppBadge = () => {
    return (
      <div className="app-badge">
        <div className="app-badge__icon-container">
          <img src={appIcon} width="40" alt=""/>
        </div>
        <div className="app-badge__integration-container">
          <i
            className="app-badge__integration material-icons icon icon--small color--grey-light">
            android
          </i>
          <p className="color--grey-light">US</p>
        </div>
      </div>
    );
};

AppBadge.propTypes = {

};

export default AppBadge;
