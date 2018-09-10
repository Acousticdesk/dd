import React from 'react';
import PropTypes from 'prop-types';

const HeadRow = () => {
    return (
      <tr>
        <th className="text-regular-weight">App Details</th>
        <th className="text-regular-weight">eCPM</th>
        <th className="text-regular-weight">Revenue</th>
      </tr>
    );
};

HeadRow.propTypes = {

};

export default HeadRow;
