import React from 'react';
import PropTypes from 'prop-types';

import MetricsList from '../components/Pages/Dashboard/MetricsList';
import MetricsTable from '../components/Pages/Dashboard/MetricsTable';
import Graph from '../components/Pages/Dashboard/Graph/index';

const Dashboard = ({sidenav, header}) => {
  return (
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
};

Dashboard.propTypes = {
  sidenav: PropTypes.element,
  header: PropTypes.element
};

export default Dashboard;


