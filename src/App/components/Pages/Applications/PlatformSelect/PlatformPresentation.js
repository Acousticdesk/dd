import React from 'react';
import PropTypes from 'prop-types';

import PlatformIcon from './PlatformIcon';

const PlatformPresentation = ({platform, selectedClass, onSelectPlatform}) => {
  return (
    <div
      data-value={platform}
      onClick={onSelectPlatform}
      className="platform-select__option-col"
    >
      <div className={`
        card-selectable
        platform-select__option
        text-center
        isCursorPointer
        ${selectedClass}
      `}>
        <div className="platform-select__option-content">
          <div className="platform-select__icon-container">
            <PlatformIcon platform={platform}/>
          </div>
          <p className="text-lead">{platform}</p>
        </div>
      </div>
    </div>
  );
};

PlatformPresentation.propTypes = {
  platform: PropTypes.string,
  selectedClass: PropTypes.string,
  onSelectPlatform: PropTypes.func
};

export default PlatformPresentation;
