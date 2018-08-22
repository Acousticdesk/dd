import React from 'react';
import PropTypes from 'prop-types';

const Presentation = ({platformsList}) => {
  return (
    <div className="platform-select">
      <p className="text-lead color--dark">Choose your platform</p>
      <div className="platform-select__options-container">
        {platformsList}
      </div>
    </div>
  );
};

Presentation.propTypes = {
  platformsList: PropTypes.element
};

export default Presentation;
