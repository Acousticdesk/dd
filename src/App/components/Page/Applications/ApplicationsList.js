import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appEdit } from '../../../redux/data/appEdit';

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

const createList = (apps, appEdit, onDeleteApp, props) => {
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
        onEditApp={() => appEdit(id)}
        onDeleteApp={onDeleteApp}
      />
    );
  });
};

const ApplicationsList = ({apps, appEdit, onDeleteApp, loader, ...props}) => {
  return (
    <React.Fragment>
      {loader ? <div className="loader" /> : createList(apps, appEdit, onDeleteApp, props)}
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
  onDeleteApp: PropTypes.func,
  loader: PropTypes.bool,
  appEdit: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  appEdit: bindActionCreators(appEdit, dispatch),
});

export default connect(null, mapDispatchToProps)(ApplicationsList);
