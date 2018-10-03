import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Application from './Application';

import { appEdit } from '../../../redux/ui/Applications/editing';
import { appSelect, getIdAppSelected } from '../../../redux/ui/Applications/selected';
import { placementSelect, getPlacementSelected } from '../../../redux/ui/Applications/placementSelect';
import { placementConfirmModalShow } from '../../../redux/ui/Applications/isPlacementConfirmModal';
import config from '../../../../../config';
import { getIsPlacementSettingsChanged, rememberPlacementToGoAfterConfirm } from '../../../redux/ui/Applications/placementSettings';
import { getApps, getPlacementById, getPlacements } from '../../../redux/data/entities/apps';
import { getIsLoaderApps } from '../../../redux/ui/Applications/loaderApps';

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

const createList = (apps, placements, appEdit, appSelect, placementSelect, props) => {
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
        zendesk={config.zendesk}
        packageName={<PackageName name={app.package} />}
        key={id}
        id={id}
        isSelected={isSelected}
        app={app}
        placements={placements.byAppId[app.id]}
        onEditApp={() => appEdit(id)}
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

  placementSelect = (placement) => () => {
    if (this.props.isPlacementSettingsChanged) {
      this.props.placementConfirmModalShow();
      this.props.rememberPlacementToGoAfterConfirm(placement.id);

      return;
    }

    this.props.placementSelect(placement);
  };

  render() {
    const {apps, appEdit, loader, placements, ...props} = this.props;

    return (
      <Fragment>
        {loader ? <div className="loader" /> : createList(apps, placements, appEdit, this.appSelect, this.placementSelect, props)}
      </Fragment>
    );
  }
}

ApplicationsList.propTypes = {
  apps: PropTypes.object,
  selectedPlacement: PropTypes.object,
  loader: PropTypes.bool,
  appEdit: PropTypes.func,
  idAppSelected: PropTypes.number,
  placementSelect: PropTypes.func,
  placementSelected: PropTypes.object,
  getPlacementById: PropTypes.func,
  isPlacementSettingsChanged: PropTypes.bool,
  placementConfirmModalShow: PropTypes.func,
  rememberPlacementToGoAfterConfirm: PropTypes.func,
  placements: PropTypes.object,
};

const mapStateToProps = state => ({
  idAppSelected: getIdAppSelected(state),
  placementSelected: getPlacementSelected(state),
  isPlacementSettingsChanged: getIsPlacementSettingsChanged(state),
  placements: getPlacements(state),
  loader: getIsLoaderApps(state),
  apps: getApps(state),
  getPlacementById: getPlacementById(state),
});

const mapDispatchToProps = dispatch => ({
  appEdit: bindActionCreators(appEdit, dispatch),
  appSelect: bindActionCreators(appSelect, dispatch),
  placementSelect: bindActionCreators(placementSelect, dispatch),
  placementConfirmModalShow: bindActionCreators(placementConfirmModalShow, dispatch),
  rememberPlacementToGoAfterConfirm: bindActionCreators(rememberPlacementToGoAfterConfirm, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsList);
