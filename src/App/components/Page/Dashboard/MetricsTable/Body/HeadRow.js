import React from 'react';
import PropTypes from 'prop-types';

const HeadRow = () => {
    return (
      <tr>
        <th className="metrics-table-body__column metrics-table-body__column-head text-regular-weight">App Details</th>
        <th className="metrics-table-body__column metrics-table-body__column-head text-regular-weight">eCPM</th>
        <th className="metrics-table-body__column metrics-table-body__column-head text-regular-weight">Revenue</th>
      </tr>
    );
};

HeadRow.propTypes = {

};

export default HeadRow;
