import React from 'react';
import PropTypes from 'prop-types';

import OpenIcon from '../../../../../static/assets/icons/open.svg';
import appIcon from '../../../../../static/assets/applications-page/app-placeholder.png';

const MetricsTable = () => {
  return (
    <div className="metrics-table">
      <div className="metrics-table-head">
        <div className="metrics-table-head__controls-container">
          <p className="text-lead">
            Top performance by
            <span className="isCursorPointer">
              <span className="text-bold"> eCPM</span>
              <i className="material-icons icon icon--small text-bold">arrow_drop_down</i>
            </span>
          </p>
        </div>
        <div className="metrics-table-head__icon-container">
          <OpenIcon className="svg-icon isCursorPointer"/>
        </div>
      </div>
      <div className="metrics-table-body">
        <table className="metrics-table-body__table">
          <tbody>
            <tr>
              <th className="text-regular-weight">App Details</th>
              <th className="text-regular-weight">eCPM</th>
              <th className="text-regular-weight">Revenue</th>
            </tr>
            {(new Array(15)).fill(undefined).map((i, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="app-badge">
                      <div className="app-badge__icon-container">
                        <img src={appIcon} width="40" alt=""/>
                      </div>
                      <div className="app-badge__integration-container">
                        <i
                          className="app-badge__integration material-icons icon icon--small color--grey-light">
                          android
                        </i>
                        <p className="color--grey-light">US</p>
                      </div>
                    </div>
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
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

MetricsTable.propTypes = {

};

export default MetricsTable;
