import React from 'react';
import PropTypes from 'prop-types';

const Graph = () => {
  return (
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
  );
};

Graph.propTypes = {

};

export default Graph;
