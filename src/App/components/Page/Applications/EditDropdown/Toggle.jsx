import React from 'react';
import PropTypes from 'prop-types';

import withStopPropagationNativeEvent from '../../../../HOC/withStopPropagationNativeEvent';

const Toggle = ({ savedRef }) => (
  <button type="button" ref={savedRef} className="options-btn">
    <i className="icon icon-regular material-icons isCursorPointer">more_vert</i>
  </button>
);

Toggle.defaultProps = {
  savedRef: null,
};

Toggle.propTypes = {
  savedRef: PropTypes.shape(),
};

export default withStopPropagationNativeEvent(Toggle);
