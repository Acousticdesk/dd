import React from 'react';
import PropTypes from 'prop-types';

const RenderLoader = ({loader}) => {
  if (!loader) {
    return null;
  }

  return <div className="loader"/>;
};

RenderLoader.propTypes = {
  loader: PropTypes.bool
};

export default RenderLoader;
