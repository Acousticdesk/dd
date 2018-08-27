import React from 'react';
import PropTypes from 'prop-types';

import PlatformPresentation from './PlatformPresentation';

const platforms = ['iOS', 'Android'];

const getSelectedClass = (condition) => {
  return condition ? 'selected' : '';
};

const isSelectedClass = (selected, defaultSelected) => p => {
  if (!selected) {
    return getSelectedClass(defaultSelected === p);
  }

  return getSelectedClass(selected === p);
};

const PlatformsList = ({selected, defaultSelected}) => {
  const selectedClass = isSelectedClass(selected, defaultSelected);

  return platforms.map(p => {
    return (
      <PlatformPresentation
        key={p}
        platform={p}
        selectedClass={selectedClass(p)}
      />
    );
  })
};

PlatformsList.propTypes = {
  selected: PropTypes.string,
  defaultSelected: PropTypes.string,
};

export default PlatformsList;
