import React from 'react';
import PropTypes from 'prop-types';

const stopPropagation = (e) => e.stopPropagation();

const Modal = ({close, content, title, onSubmit}) => {
  return (
    <div onClick={close} className="modal">
      <div onClick={stopPropagation} className="modal__ui">
        <header className="modal__header">
          <div className="modal__title-container">
            <h4 className="heading heading--med heading--thin">{title}</h4>
          </div>
          <div className="modal__close-container text-center">
            <i onClick={close} className="icon icon-light material-icons isCursorPointer">close</i>
          </div>
        </header>
        {content}
        <div className="modal__footer">
          <div className="create-app-form__footer">
            <div className="create-app-form__footer-col">
              <button onClick={close} className="btn btn--height-l btn-regular color--grey">Cancel</button>
            </div>
            <div className="create-app-form__footer-col">
              <button
                onClick={onSubmit}
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

Modal.propTypes = {
  close: PropTypes.func,
  content: PropTypes.element,
  title: PropTypes.string,
  onSubmit: PropTypes.string,
};

export default Modal;




