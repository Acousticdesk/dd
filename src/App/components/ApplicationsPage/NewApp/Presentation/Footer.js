import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({close, createApp}) => {
  return (
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
  );
};

Footer.propTypes = {
  close: PropTypes.func,
  createApp: PropTypes.func
};

export default Footer;
