import React from 'react';
import PropTypes from 'prop-types';

import PlatformPresentation from './PlatformPresentation';

const platforms = ['iOS', 'Android'];

const PlatformsList = ({selected}) => {
  return platforms.map(p => {
    const selectedClass = selected === p ? 'selected' : '';
    return (
      <PlatformPresentation
        key={p}
        platform={p}
        selectedClass={selectedClass}
      />
    );
  })
};

PlatformsList.propTypes = {
  selected: PropTypes.string,
};

export default PlatformsList;
