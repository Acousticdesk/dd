import React from 'react';

import NoAppsIcon from '../../../../../static/assets/icons/no-apps.svg';

export default () => (
  <div className="no-apps-prompt">
    <div className="no-apps-prompt__icon-container text-center">
      <NoAppsIcon />
    </div>
    <p className="text-lead color--grey-light text-center">
      Select an App
      <br />
      to view it’s Placement details
    </p>
  </div>
);
