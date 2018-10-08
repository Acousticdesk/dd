import React from 'react';

import AppInfo from './AppInfo';

const MetricRow = () => (
  <tr>
    <td className="metrics-table-body__column metrics-table-body__column-body metrics-table-body__column-app-icon">
      <AppInfo />
    </td>
    <td className="metrics-table-body__column metrics-table-body__column-body">
      <h4 className="heading heading--md">
        10.00
        <span className="text--smaller currency">USD</span>
      </h4>
    </td>
    <td className="metrics-table-body__column metrics-table-body__column-body">
      <div className="heading heading--md">
        11,370.44
        <span className="text--smaller currency">USD</span>
      </div>
    </td>
  </tr>
);

export default MetricRow;
