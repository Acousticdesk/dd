import React from 'react';
import PropTypes from 'prop-types';

import withStopPropagationNativeEvent from '../../../../HOC/withStopPropagationNativeEvent';

const Toggle = () => (
  <a href="javascript:void(0);" className="options-btn">
    <i className="icon icon-regular material-icons isCursorPointer">more_vert</i>
  </a>
);

Toggle.propTypes = {
  onClick: PropTypes.func,
};

export default withStopPropagationNativeEvent(Toggle);
