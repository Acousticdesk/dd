import React from 'react';
import PropTypes from 'prop-types';

import OpenIcon from '../../../static/assets/icons/open.svg';
import appIcon from '../../../static/assets/applications-page/app-placeholder.png';

const Dashboard = ({sidenav, header}) => {
  return (
    <div className="l-page l-page--with-sidebar l-page-bg-whisper">
      <div>
        {sidenav}
      </div>

      <div className="l-dashboard__main">
        {header}
        <ul className="dashboard-header">
          <li>
            <div className="dashboard-header__metric metric-card metric-card--active">
              <div className="metric-card__title-container">
                <h4 className="heading heading--large">39,900</h4>
              </div>
              <p className="color--grey">IMPRESSIONS</p>
            </div>
          </li>
          <li>
            <div className="dashboard-header__metric metric-card isActive">
              <div className="metric-card__title-container">
                <h4 className="heading heading--large">
                  70.44
                  <span className="text--smaller currency">USD</span>
                </h4>
              </div>
              <p className="color--grey">REVENUE</p>
            </div>
          </li>
          <li>
            <div className="dashboard-header__metric metric-card isActive">
              <div className="metric-card__title-container">
                <h4 className="heading heading--large">
                  1.76
                  <span className="text--smaller currency">USD</span>
                </h4>
              </div>
              <p className="color--grey">ECPM</p>
            </div>
          </li>
          <li>
            <div className="dashboard-header__metric metric-card isActive">
              <div className="metric-card__title-container">
                <h4 className="heading heading--large">78</h4>
              </div>
              <p className="color--grey">REQUESTS</p>
            </div>
          </li>
          <li>
            <div className="dashboard-header__metric metric-card isActive">
              <div className="metric-card__title-container">
                <h4 className="heading heading--large">78.08%</h4>
              </div>
              <p className="color--grey">FILL</p>
            </div>
          </li>
          <li>
            <div className="dashboard-header__filters-container">
              <div className="dashboard-header__metric metric-filters">
                <p className="color--grey">FILTERS</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="l-dashboard__page-content">
          <div className="l-dashboard__container-left">
            <div className="apps-metrics">
              <div className="apps-metrics-head">
                <div className="apps-metrics-head__controls-container">
                  <p className="text-lead">
                    Top performance by
                    <span className="isCursorPointer">
                      <span className="text-bold"> eCPM</span>
                      <i className="material-icons icon icon--small text-bold">arrow_drop_down</i>
                    </span>
                  </p>
                </div>
                <div className="apps-metrics-head__icon-container">
                  <OpenIcon className="svg-icon isCursorPointer"/>
                </div>
              </div>
              <div className="apps-metrics-body">
                <table className="apps-metrics-body__table">
                  <tr>
                    <th className="text-regular-weight">App Details</th>
                    <th className="text-regular-weight">eCPM</th>
                    <th className="text-regular-weight">Revenue</th>
                  </tr>
                  {(new Array(15)).fill(undefined).map(i => {
                    return (
                      <tr>
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
                </table>
              </div>
            </div>
          </div>
          <div className="l-dashboard__container-right">
            <div className="graph">
              <div className="graph-header">
                <div className="graph-header__column">
                  <span className="text-lead">Impressions</span>
                  <ul className="graph-header__metrics-container">
                    <li className="graph-header__chip-container">
                      <div className="chip">
                        All Applications
                        <i className="material-icons icon--small chip__remove isCursorPointer">close</i>
                      </div>
                    </li>
                    <li className="graph-header__chip-container">
                      <div className="chip">
                        All Platforms
                        <i className="material-icons icon--small chip__remove isCursorPointer">close</i>
                      </div>
                    </li>
                    <li className="graph-header__chip-container">
                      <div className="chip">
                        All Placements
                        <i className="material-icons icon--small chip__remove isCursorPointer">close</i>
                      </div>
                    </li>
                    <li className="graph-header__chip-container">
                      <div className="chip chip--no-close">
                        +1
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="graph-header__column">
                  <span className="text-bold">
                    Timezone
                    <i className="material-icons icon icon--small">arrow_drop_down</i>
                  </span>
                </div>
                <div className="graph-header__column">
                  <div className="text-lead">
                    <span className="text-bold">18-07-2017 </span>
                    To
                    <span className="text-bold"> 18-07-2017</span>
                  </div>
                </div>
              </div>
            </div>
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


