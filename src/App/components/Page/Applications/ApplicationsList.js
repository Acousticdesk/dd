import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appEdit } from '../../../redux/data/Applications/appEdit';
import { appSelect, getIdAppSelected } from '../../../redux/data/Applications/appSelect';
import { placementSelect, getPlacementSelected } from '../../../redux/data/Applications/placementSelect';
import { placementConfirmModalShow } from '../../../redux/data/Applications/isPlacementConfirmModal';

import Application from './Application';
import { getIsPlacementSettingsChanged, rememberPlacementToGoAfterConfirm } from '../../../redux/data/Applications/placementSettings';

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

const createList = (apps, appEdit, appSelect, placementSelect, onDeleteApp, props) => {
  if (!apps) {
    return null;
  }

  return Object.entries(apps).map((a) => {
    const id = window.parseInt(a[0]);
    const app = a[1];
    const isSelected = props.idAppSelected === id;

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
        placementSelect={placementSelect}
      />
    );
  });
};

class ApplicationsList extends Component {
  appSelect = (id) => () => {
    const {idAppSelected, appSelect} = this.props;

    if (id === idAppSelected) {
      appSelect(null);
      return;
    }

    appSelect(id);
  };

  placementSelect = (id) => () => {
    if (this.props.isPlacementSettingsChanged) {
      this.props.placementConfirmModalShow();
      this.props.rememberPlacementToGoAfterConfirm(id);

      return;
    }

    const placementSelected = this.props.getPlacementById(this.props.idAppSelected, id);

    this.props.placementSelect(placementSelected);
  };

  render() {
    const {apps, appEdit, onDeleteApp, loader, ...props} = this.props;

    return (
      <Fragment>
        {loader ? <div className="loader" /> : createList(apps, appEdit, this.appSelect, this.placementSelect, onDeleteApp, props)}
      </Fragment>
    );
  }
}

ApplicationsList.propTypes = {
  apps: PropTypes.object,
  deletePlacement: PropTypes.func,
  selectedPlacement: PropTypes.object,
  zendesk: PropTypes.object,
  onDeleteApp: PropTypes.func,
  loader: PropTypes.bool,
  appEdit: PropTypes.func,
  idAppSelected: PropTypes.number,
  placementSelect: PropTypes.func,
  placementSelected: PropTypes.object,
  getPlacementById: PropTypes.func,
  isPlacementSettingsChanged: PropTypes.bool,
  placementConfirmModalShow: PropTypes.func,
  rememberPlacementToGoAfterConfirm: PropTypes.func,
};

const mapStateToProps = state => ({
  idAppSelected: getIdAppSelected(state),
  placementSelected: getPlacementSelected(state),
  isPlacementSettingsChanged: getIsPlacementSettingsChanged(state),
});

const mapDispatchToProps = dispatch => ({
  appEdit: bindActionCreators(appEdit, dispatch),
  appSelect: bindActionCreators(appSelect, dispatch),
  placementSelect: bindActionCreators(placementSelect, dispatch),
  placementConfirmModalShow: bindActionCreators(placementConfirmModalShow, dispatch),
  rememberPlacementToGoAfterConfirm: bindActionCreators(rememberPlacementToGoAfterConfirm, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsList);
