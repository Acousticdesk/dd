import React from 'react';
import PropTypes from 'prop-types';

const stopPropagation = (e) => e.stopPropagation();

const Modal = ({close, header, content, footer}) => {
  return (
    <div onClick={close} className="modal">
      <div onClick={stopPropagation} className="modal__ui">
        <header className="modal__header">
          {header}
        </header>
        <div className="modal__content">
          {content}
        </div>
        <div className="modal__footer">
          {footer}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  close: PropTypes.func,
  header: PropTypes.element,
  content: PropTypes.element,
  footer: PropTypes.element,
};

export default Modal;




