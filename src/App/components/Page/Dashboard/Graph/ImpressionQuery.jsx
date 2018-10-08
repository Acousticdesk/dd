import React from 'react';
import PropTypes from 'prop-types';

const Chip = ({ name }) => (
  <li className="graph-header__chip-container">
    <div className="chip">
      {name}
      <i className="material-icons icon--small chip__remove isCursorPointer">close</i>
    </div>
  </li>
);

Chip.defaultProps = {
  name: null,
};

Chip.propTypes = {
  name: PropTypes.string,
};

export default () => {
  const query = ['All Applications', 'All Platforms', 'All Placements'];

  return (
    <ul className="graph-header__metrics-container">
      <Chip name={query[0]} />
      <li data-target="indicator" className="graph-header__chip-container">
        <div className="chip chip--no-close">
          +
          {query.length - 1}
        </div>
      </li>
    </ul>
  );
};
