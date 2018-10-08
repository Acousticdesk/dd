import React from 'react';
import PropTypes from 'prop-types';
import withStopPropagationNativeEvent from '../../../HOC/withStopPropagationNativeEvent';

const Toggle = ({ email, onClick }) => (
  <span tabIndex="0" role="button" onKeyDown={onClick} onClick={onClick}>
    <span className="user-dropdown__toggle">
      {email}
      <i className="material-icons">arrow_drop_down</i>
    </span>
    <span className="user-dropdown__toggle-mobile">
      <i className="l-header__user-icon user-dropdown__icon-mobile icon--small icon-regular material-icons isCursorPointer">person</i>
    </span>
  </span>
);

Toggle.defaultProps = {
  email: null,
  onClick: null,
};

Toggle.propTypes = {
  email: PropTypes.string,
  onClick: PropTypes.func,
};

export default withStopPropagationNativeEvent(Toggle);
