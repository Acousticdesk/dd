import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import PlatformIcon from './PlatformIcon';

const PlatformPresentation = ({
  platform,
  selectedClass,
  label,
  isDisabled,
  disabledClass,
}) => {
  const id = `newapp_${platform}`;

  return (
    <div
      data-value={platform}
      className="platform-select__option-col"
    >
      <Field hidden disabled={isDisabled} name="platform" component="input" type="radio" value={platform} id={id} />
      <label
        htmlFor={id}
        className={`
        card-selectable
        platform-select__option
        text-center
        ${selectedClass}
        ${disabledClass}
      `}
      >
        <div className="platform-select__option-content">
          <div className="platform-select__icon-container">
            <PlatformIcon platform={platform} />
          </div>
          <p className="text-lead">{label}</p>
        </div>
      </label>
    </div>
  );
};

PlatformPresentation.defaultProps = {
  platform: null,
  selectedClass: null,
  label: null,
  isDisabled: null,
  disabledClass: null,
};

PlatformPresentation.propTypes = {
  platform: PropTypes.string,
  selectedClass: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  disabledClass: PropTypes.string,
};

export default PlatformPresentation;
