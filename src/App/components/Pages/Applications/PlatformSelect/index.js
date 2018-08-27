import React from 'react';
import PropTypes from 'prop-types';

import PlatformsList from './PlatformsList';

const Presentation = ({selected, defaultSelected, platforms}) => {
  return (
    <div className="platform-select">
      <p className="text-lead color--dark">Choose your platform</p>
      <div className="platform-select__options-container">
        <PlatformsList defaultSelected={defaultSelected} selected={selected} platforms={platforms} />
      </div>
    </div>
  );
};

Presentation.propTypes = {
  selected: PropTypes.string,
  defaultSelected: PropTypes.string,
  platforms: PropTypes.object
};

export default Presentation;
