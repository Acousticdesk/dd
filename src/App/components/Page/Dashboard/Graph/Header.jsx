import React from 'react';

import ImpressionQuery from './ImpressionQuery';

const Header = () => (
  <div className="graph-header">
    <div className="graph-header__column">
      <span className="text-lead">Impressions</span>
      <ImpressionQuery />
    </div>
    <div className="graph-header__column">
      <span className="text-bold">
        Timezone
        <i className="material-icons icon icon--small">arrow_drop_down</i>
      </span>
    </div>
    <div className="graph-header__column">
      <div className="text-lead">
        <span className="text-bold">18-07-2017 </span>
        To
        <span className="text-bold"> 18-07-2017</span>
      </div>
    </div>
  </div>
);

export default Header;
