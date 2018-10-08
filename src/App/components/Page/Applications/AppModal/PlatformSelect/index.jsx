import React from 'react';
import PropTypes from 'prop-types';

import PlatformsList from './PlatformsList';

const Presentation = ({ selected, platforms, isDisabled }) => (
  <div className="platform-select">
    <p className={`text-lead ${isDisabled ? 'color--disabled' : 'color--dark'}`}>Choose your platform</p>
    <div className="platform-select__options-container">
      <PlatformsList
        isDisabled={isDisabled}
        selected={selected}
        platforms={platforms}
      />
    </div>
  </div>
);

Presentation.defaultProps = {
  selected: null,
  platforms: null,
  isDisabled: null,
};

Presentation.propTypes = {
  selected: PropTypes.string,
  platforms: PropTypes.shape(),
  isDisabled: PropTypes.bool,
};

export default Presentation;
