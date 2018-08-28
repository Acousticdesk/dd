import React from 'react';
import PropTypes from 'prop-types';

import PlatformPresentation from './PlatformPresentation';

const getSelectedClass = (condition) => {
  return condition ? 'selected' : '';
};

const isSelectedClass = (selected) => p => {
  return getSelectedClass(selected === p);
};

const isDisabledClass = (isDisabled) => {
  return isDisabled ? 'platform-select__option--disabled' : '';
};

const PlatformsList = ({selected, platforms, isDisabled}) => {
  const selectedClass = isSelectedClass(selected);
  const disabledClass = isDisabledClass(isDisabled);

  return Object.keys(platforms).map(p => {
    return (
      <PlatformPresentation
        key={p}
        platform={p}
        label={platforms[p]}
        selectedClass={selectedClass(p)}
        isDisabled={isDisabled}
        disabledClass={disabledClass}
      />
    );
  })
};

PlatformsList.propTypes = {
  selected: PropTypes.string,
  platforms: PropTypes.object,
  isDisabled: PropTypes.bool
};

export default PlatformsList;
