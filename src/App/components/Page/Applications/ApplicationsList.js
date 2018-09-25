import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appEdit } from '../../../redux/data/Applications/appEdit';
import { appSelect, getIdAppSelected } from '../../../redux/data/Applications/appSelect';

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

const createList = (apps, appEdit, appSelect, onDeleteApp, props) => {
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
        select={appSelect}
      />
    );
  });
};

class ApplicationsList extends Component {
  appSelect = (id) => () => {
    const {idAppSelected, appSelect} = this.props;

    console.log(id);
    console.log(idAppSelected);

    if (id === idAppSelected) {
      appSelect(null);
      return;
    }

    appSelect(id);
  };

  render() {
    const {apps, appEdit, onDeleteApp, loader, ...props} = this.props;

    return (
      <Fragment>
        {loader ? <div className="loader" /> : createList(apps, appEdit, this.appSelect, onDeleteApp, props)}
      </Fragment>
    );
  }
}

ApplicationsList.propTypes = {
  apps: PropTypes.object,
  deletePlacement: PropTypes.func,
  selectPlacement: PropTypes.func,
  selectedPlacement: PropTypes.object,
  selectedApp: PropTypes.number,
  zendesk: PropTypes.object,
  onDeleteApp: PropTypes.func,
  loader: PropTypes.bool,
  appEdit: PropTypes.func,
  idAppSelected: PropTypes.number,
};

const mapStateToProps = state => ({
  idAppSelected: getIdAppSelected(state),
});

const mapDispatchToProps = dispatch => ({
  appEdit: bindActionCreators(appEdit, dispatch),
  appSelect: bindActionCreators(appSelect, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsList);
