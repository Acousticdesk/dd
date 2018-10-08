import React from 'react';

const MetricsList = () => (
  <ul className="dashboard-metrics-list">
    <li>
      <div className="dashboard-metrics-list__metric metric-card metric-card--active">
        <div className="metric-card__title-container">
          <h4 className="heading heading--large">39,900</h4>
        </div>
        <p className="color--grey">IMPRESSIONS</p>
      </div>
    </li>
    <li>
      <div className="dashboard-metrics-list__metric metric-card isActive">
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
      <div className="dashboard-metrics-list__metric metric-card isActive">
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
      <div className="dashboard-metrics-list__metric metric-card isActive">
        <div className="metric-card__title-container">
          <h4 className="heading heading--large">78</h4>
        </div>
        <p className="color--grey">REQUESTS</p>
      </div>
    </li>
    <li>
      <div className="dashboard-metrics-list__metric metric-card isActive">
        <div className="metric-card__title-container">
          <h4 className="heading heading--large">78.08%</h4>
        </div>
        <p className="color--grey">FILL</p>
      </div>
    </li>
    <li>
      <div className="dashboard-metrics-list__filters-container">
        <div className="dashboard-metrics-list__metric metric-filters">
          <p className="color--grey">FILTERS</p>
        </div>
      </div>
    </li>
  </ul>
);

export default MetricsList;
