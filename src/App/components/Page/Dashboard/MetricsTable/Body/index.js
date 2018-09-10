import React from 'react';
import PropTypes from 'prop-types';

import HeadRow from './HeadRow';
import MetricRow from './MetricRow';

const Body = () => {
    return (
      <div className="metrics-table-body">
        <table className="metrics-table-body__table">
          <tbody>
            <HeadRow />
            {(new Array(15)).fill(undefined).map((i, index) => {
                return <MetricRow key={index} />;
            })}
          </tbody>
        </table>
      </div>
    );
};

Body.propTypes = {

};

export default Body;
