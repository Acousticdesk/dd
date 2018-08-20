import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({sidenav, header}) => {
  return (
    <div className="l-page">
      <div>
        {sidenav}
      </div>

      <div>
        {header}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  sidenav: PropTypes.element,
  header: PropTypes.element
};

export default Dashboard;


