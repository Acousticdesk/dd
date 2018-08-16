import React from 'react';
import PropTypes from 'prop-types';

const AppIcon = ({url}) => {
  return (
    url
      ? <img src={url} width="36px" alt=""/>
      : <i className="icon icon-regular icon--large material-icons">smartphone</i>
  );
};

AppIcon.propTypes = {
  url: PropTypes.string
};

export default AppIcon;
