import React from 'react';
import PropTypes from 'prop-types';

import MetricsList from '../components/Page/Dashboard/MetricsList';
import MetricsTable from '../components/Page/Dashboard/MetricsTable/index';
import Graph from '../components/Page/Dashboard/Graph/index';

const Dashboard = ({ sidenav, header }) => (
  <div className="l-page l-page--with-sidebar l-page-bg-whisper">
    <div>
      {sidenav}
    </div>

    <div className="l-dashboard__main">
      {header}
      <MetricsList />
      <div className="l-dashboard__page-content">
        <div className="l-dashboard__container-left">
          <MetricsTable />
        </div>
        <div className="l-dashboard__container-right">
          <Graph />
        </div>
      </div>
    </div>
  </div>
);

Dashboard.defaultProps = {
  sidenav: null,
  header: null,
};

Dashboard.propTypes = {
  sidenav: PropTypes.element,
  header: PropTypes.element,
};

export default Dashboard;
