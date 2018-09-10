import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Body from './Body/index';

const MetricsTable = () => {
  return (
    <div className="metrics-table">
      <Header/>
      <Body/>
    </div>
  );
};

MetricsTable.propTypes = {

};

export default MetricsTable;
