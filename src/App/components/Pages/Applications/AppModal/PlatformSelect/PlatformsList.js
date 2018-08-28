import React from 'react';
import PropTypes from 'prop-types';

import PlatformPresentation from './PlatformPresentation';

const getSelectedClass = (condition) => {
  return condition ? 'selected' : '';
};

const isSelectedClass = (selected, defaultSelected) => p => {
  if (!selected) {
    return getSelectedClass(defaultSelected === p);
  }

  return getSelectedClass(selected === p);
};

const PlatformsList = ({selected, defaultSelected, platforms}) => {
  const selectedClass = isSelectedClass(selected, defaultSelected);

  return Object.keys(platforms).map(p => {
    return (
      <PlatformPresentation
        key={p}
        platform={p}
        label={platforms[p]}
        selectedClass={selectedClass(p)}
      />
    );
  })
};

PlatformsList.propTypes = {
  selected: PropTypes.string,
  defaultSelected: PropTypes.string,
  platforms: PropTypes.object,
};

export default PlatformsList;
