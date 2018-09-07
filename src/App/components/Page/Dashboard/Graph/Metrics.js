import React from 'react';

const Metrics = () => {
  return (
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
  );
};

export default Metrics;
