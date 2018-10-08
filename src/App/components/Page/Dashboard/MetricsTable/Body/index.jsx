import React from 'react';

import HeadRow from './HeadRow';
import MetricRow from './MetricRow';

const Body = () => (
  <div className="metrics-table-body">
    <table className="metrics-table-body__table">
      <tbody>
        <HeadRow />
        {(new Array(15)).fill(undefined).map((i, index) => <MetricRow key={index} />)}
      </tbody>
    </table>
  </div>
);

export default Body;
