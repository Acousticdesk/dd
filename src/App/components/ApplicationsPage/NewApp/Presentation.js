import React from 'react';
import PropTypes from 'prop-types';

import PlatformSelect from './PlatformSelect';

const stopPropagation = (e) => e.stopPropagation();

const RenderLoader = ({loader}) => {
  if (!loader) {
    return null;
  }

  return <div className="loader"/>;
};

RenderLoader.propTypes = {
  loader: PropTypes.bool
};

const NewAppPresentation =
  ({
     close,
     integrationSelect,
     onPlatformChange,
     createApp,
     statusField,
     appTextFields,
     loader
   }) => {
    return (
      <div onClick={close} className="modal">
        <div onClick={stopPropagation} className="modal__ui">
          <RenderLoader loader={loader}/>
          <header className="modal__header">
            <div className="modal__title-container">
              <h4 className="heading heading--med heading--thin">New Application</h4>
            </div>
            <div className="modal__close-container text-center">
              <i onClick={close} className="icon icon-light material-icons isCursorPointer">close</i>
            </div>
          </header>
          <div className="modal__content">
            <PlatformSelect onChange={onPlatformChange}/>
            {integrationSelect}
            <div className="application-info">
              {appTextFields}
              {statusField}
            </div>
          </div>
          <div className="modal__footer">
            <div className="create-app-form__footer">
              <div className="create-app-form__footer-col">
                <button onClick={close} className="btn btn--height-l btn-regular color--grey">Cancel</button>
              </div>
              <div className="create-app-form__footer-col">
                <button
                  onClick={createApp}
                  className="btn btn--height-l btn-chetwod-blue btn-border-chetwod-extra-blue"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

NewAppPresentation.propTypes = {
  close: PropTypes.func,
  onPlatformChange: PropTypes.func,
  createApp: PropTypes.func,
  integrationSelect: PropTypes.element,
  statusField: PropTypes.element,
  appTextFields: PropTypes.element,
  loader: PropTypes.bool
};

export default NewAppPresentation;
