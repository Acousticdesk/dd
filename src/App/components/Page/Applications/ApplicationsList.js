import React from 'react';
import PropTypes from 'prop-types';

import Application from './Application';

const PackageName = ({name}) => {
  if (name.length <= 18) {
    return name;
  }

  const arrName = name.split('');

  return [...arrName.slice(0, 8), '...', ...arrName.slice(-9)];
};

PackageName.propTypes = {
  name: PropTypes.string,
};

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
        packageName={<PackageName name={app.package} />}
        key={id}
        id={id}
        isSelected={isSelected}
        app={app}
        onEditApp={onEditApp(id)}
        onDeleteApp={onDeleteApp}
      />
    );
  });
};

const ApplicationsList = ({apps, onEditApp, onDeleteApp, loader, ...props}) => {
  return (
    <React.Fragment>
      {loader ? <div className="loader" /> : createList(apps, onEditApp, onDeleteApp, props)}
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
  loader: PropTypes.bool,
};

export default ApplicationsList;
