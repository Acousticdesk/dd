import React from 'react';
import PropTypes from 'prop-types';

import PlatformPresentation from './PlatformPresentation';

const getSelectedClass = condition => (condition ? 'selected' : '');

const isSelectedClass = selected => p => getSelectedClass(selected === p);

const isDisabledClass = isDisabled => (isDisabled ? 'platform-select__option--disabled' : '');

const PlatformsList = ({ selected, platforms, isDisabled }) => {
  const selectedClass = isSelectedClass(selected);
  const disabledClass = isDisabledClass(isDisabled);

  return Object.keys(platforms).map(p => (
    <PlatformPresentation
      key={p}
      platform={p}
      label={platforms[p]}
      selectedClass={selectedClass(p)}
      isDisabled={isDisabled}
      disabledClass={disabledClass}
    />
  ));
};

PlatformsList.defaultProps = {
  selected: null,
  platforms: null,
  isDisabled: null,
};

PlatformsList.propTypes = {
  selected: PropTypes.string,
  platforms: PropTypes.shape(),
  isDisabled: PropTypes.bool,
};

export default PlatformsList;
