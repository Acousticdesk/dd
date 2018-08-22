import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import PlatformIcon from './PlatformIcon';

const PlatformPresentation = ({platform, selectedClass}) => {
  const id = `newapp_${platform}`;

  return (
    <div
      data-value={platform}
      className="platform-select__option-col"
    >
      <Field hidden name="platform" component="input" type="radio" value={platform} id={id}/>
      <label htmlFor={id} className={`
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
      </label>
    </div>
  );
};

PlatformPresentation.propTypes = {
  platform: PropTypes.string,
  selectedClass: PropTypes.string,
};

export default PlatformPresentation;
