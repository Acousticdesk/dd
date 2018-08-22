import React from 'react';
import PropTypes from 'prop-types';

import DefaultHeaderContent from './DefaultHeaderContent';

const RenderHeader = ({header, title, close}) => {
  if (!header) {
    return (
      <div className="modal__header">
        <DefaultHeaderContent title={title} close={close}/>
      </div>
    );
  }

  return header;
};

RenderHeader.propTypes = {
  header: PropTypes.element,
  title: PropTypes.string,
  close: PropTypes.func
};

export default RenderHeader;
