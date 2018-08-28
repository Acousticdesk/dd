import React from 'react';
import PropTypes from 'prop-types';

import Application from './Application';

const createList = (apps, onEditApp, onDeleteApp, props) => {
  if (!apps) {
    return null;
  }

  return Object.entries(apps).map((a) => {
    const id = window.parseInt(a[0]);
    const app = a[1];
    const isSelected = props.selectedApp === id;

    return (
      <Application
        {...props}
        key={id}
        id={id}
        isSelected={isSelected}
        app={app}
        onEditApp={onEditApp(id)}
      />
    );
  });
};

const ApplicationsList = ({apps, onEditApp, onDeleteApp, ...props}) => {
  return (
    <React.Fragment>
      {createList(apps, onEditApp, onDeleteApp, props)}
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
  zendesk: PropTypes.object,
  onEditApp: PropTypes.func,
  onDeleteApp: PropTypes.func,
};

export default ApplicationsList;
