import React from 'react';
import PropTypes from 'prop-types';

import PlatformPresentation from './PlatformPresentation';

const PlatformsList = ({platforms, selected, onSelectPlatform}) => {
  return (
    platforms.map(p => {
      const selectedClass = selected === p ? 'selected' : '';
      return (
        <PlatformPresentation
          key={p}
          platform={p}
          selectedClass={selectedClass}
          onSelectPlatform={onSelectPlatform}
        />
      );
    })
  );
};

PlatformsList.propTypes = {
  platforms: PropTypes.array,
  selected: PropTypes.string,
  onSelectPlatform: PropTypes.func
};

export default PlatformsList;
