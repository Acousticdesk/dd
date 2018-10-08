import React from 'react';

import withStopPropagationNativeEvent from '../../../../HOC/withStopPropagationNativeEvent';

const Toggle = () => (
  <button type="button" className="options-btn">
    <i className="icon icon-regular material-icons isCursorPointer">more_vert</i>
  </button>
);

export default withStopPropagationNativeEvent(Toggle);
