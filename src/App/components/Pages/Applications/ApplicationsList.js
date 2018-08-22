import React from 'react';
import PropTypes from 'prop-types';

import Application from './Application/index';

const createList = (apps, props) => {
  if (!apps) {
    return null;
  }

  return Object.entries(apps).map((a) => {
    const id = window.parseInt(a[0]);
    const app = a[1];
    const isSelected = props.selectedApp === id;

    return <Application key={id} id={id} isSelected={isSelected} app={app} {...props}/>;
  });
};

const ApplicationsList = ({apps, ...props}) => {
  return (
    <React.Fragment>
      {createList(apps, props)}
    </React.Fragment>
  );
};

ApplicationsList.propTypes = {
  apps: PropTypes.object,
  deletePlacement: PropTypes.func,
  selectPlacement: PropTypes.func,
  selectedPlacement: PropTypes.object,
  selectedApp: PropTypes.number,
  select: PropTypes.func,
  zendesk: PropTypes.object
};

export default ApplicationsList;
