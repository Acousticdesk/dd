import React from 'react';
import PropTypes from 'prop-types';

import PlatformsList from './PlatformsList';

const Presentation = ({selected}) => {
  return (
    <div className="platform-select">
      <p className="text-lead color--dark">Choose your platform</p>
      <div className="platform-select__options-container">
        <PlatformsList selected={selected}/>
      </div>
    </div>
  );
};

Presentation.propTypes = {
  selected: PropTypes.string
};

export default Presentation;
