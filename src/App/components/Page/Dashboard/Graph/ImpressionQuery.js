import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const Chip = ({name}) => {
  return (
    <li className="graph-header__chip-container">
      <div className="chip">
        {name}
        <i className="material-icons icon--small chip__remove isCursorPointer">close</i>
      </div>
    </li>
  );
};

Chip.propTypes = {
  name: PropTypes.string,
};

class ImpressionQuery extends Component {
  render() {
    const query = ['All Applications', 'All Platforms', 'All Placements'];

    return (
      <ul className="graph-header__metrics-container">
        <Chip name={query[0]}/>
        <li data-target="indicator" className="graph-header__chip-container">
          <div className="chip chip--no-close">
            +{query.length - 1}
          </div>
        </li>
      </ul>
    );
  }
}

export default ImpressionQuery;
