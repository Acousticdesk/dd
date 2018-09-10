import React from 'react';
import PropTypes from 'prop-types';

import AppBadge from './AppBadge';

const MetricRow = () => {
    return (
      <tr>
        <td>
          <AppBadge />
        </td>
        <td>
          <h4 className="heading heading--large">
            10.00
            <span className="text--smaller currency">USD</span>
          </h4>
        </td>
        <td>
          <div className="heading heading--large">
            11,370.44
            <span className="text--smaller currency">USD</span>
          </div>
        </td>
      </tr>
    );
};

MetricRow.propTypes = {

};

export default MetricRow;
