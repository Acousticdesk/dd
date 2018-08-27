import React from 'react';
import PropTypes from 'prop-types';

import ConfirmText from './ConfirmText';
import RenderHeader from './RenderHeader';

const stopPropagation = (e) => e.stopPropagation();

const Modal = ({close, content, title, onSubmit, confirmText, header}) => {
  return (
    <div onClick={close} className="modal">
      <div onClick={stopPropagation} className="modal__ui">
        <RenderHeader header={header} title={title} close={close}/>
        {content}
        <div className="modal__footer">
          <div className="create-app-form__footer">
            <div className="create-app-form__footer-col">
              <button onClick={close} className="btn btn--height-l btn-regular color--grey">Cancel</button>
            </div>
            <div className="create-app-form__footer-col">
              <button
                type="submit"
                onClick={onSubmit}
                className="btn btn--height-l btn-chetwod-blue btn-border-chetwod-extra-blue"
              >
                <ConfirmText text={confirmText}/>
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
  onSubmit: PropTypes.func,
  confirmText: PropTypes.string,
  header: PropTypes.element,
};

export default Modal;




