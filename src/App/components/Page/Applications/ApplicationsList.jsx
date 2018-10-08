import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Application from './Application/index';

import { appEdit as appEditImport } from '../../../redux/ui/Applications/editing';
import { appSelect as appSelectImport, getIdAppSelected } from '../../../redux/ui/Applications/selected';
import { placementSelect as placementSelectImport, getPlacementSelected } from '../../../redux/ui/Applications/placementSelect';
import { placementConfirmModalShow as placementConfirmModalShowImport } from '../../../redux/ui/Applications/isPlacementConfirmModal';
import config from '../../../../../config';
import { getIsPlacementSettingsChanged, rememberPlacementToGoAfterConfirm as rememberPlacementToGoAfterConfirmImport } from '../../../redux/ui/Applications/placementSettings';
import { getApps } from '../../../redux/data/entities/apps';
import { getPlacementById, getPlacements } from '../../../redux/data/entities/placements';
import { getIsLoaderApps } from '../../../redux/ui/Applications/loaderApps';

const PackageName = ({ name }) => {
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
  constructor(props) {
    super(props);

    this.appSelect = this.appSelect.bind(this);
    this.placementSelect = this.placementSelect.bind(this);
  }

  appSelect(id) {
    return () => {
      const { idAppSelected, appSelect } = this.props;

      if (id === idAppSelected) {
        appSelect(null);
        return;
      }

      appSelect(id);
    };
  }

  placementSelect(placement) {
    const {
      isPlacementSettingsChanged,
      placementConfirmModalShow,
      rememberPlacementToGoAfterConfirm,
      placementSelect,
    } = this.props;
    return () => {
      if (isPlacementSettingsChanged) {
        placementConfirmModalShow();
        rememberPlacementToGoAfterConfirm(placement.id);

        return;
      }

      placementSelect(placement);
    };
  }

  render() {
    const {
      apps, appEdit, loader, placements, ...props
    } = this.props;

    return (
      <Fragment>
        {loader ? <div className="loader" /> : createList(apps, placements, appEdit, this.appSelect, this.placementSelect, props)}
      </Fragment>
    );
  }
}

ApplicationsList.defaultProps = {
  apps: null,
  selectedPlacement: null,
  loader: null,
  appEdit: null,
  idAppSelected: null,
  placementSelect: null,
  placementSelected: null,
  getPlacementById: null,
  isPlacementSettingsChanged: null,
  placementConfirmModalShow: null,
  rememberPlacementToGoAfterConfirm: null,
  placements: null,
  appSelect: null,
};

ApplicationsList.propTypes = {
  apps: PropTypes.shape(),
  selectedPlacement: PropTypes.shape(),
  loader: PropTypes.bool,
  appEdit: PropTypes.func,
  idAppSelected: PropTypes.number,
  placementSelect: PropTypes.func,
  placementSelected: PropTypes.shape(),
  getPlacementById: PropTypes.func,
  isPlacementSettingsChanged: PropTypes.bool,
  placementConfirmModalShow: PropTypes.func,
  rememberPlacementToGoAfterConfirm: PropTypes.func,
  placements: PropTypes.shape(),
  appSelect: PropTypes.func,
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
  appEdit: bindActionCreators(appEditImport, dispatch),
  appSelect: bindActionCreators(appSelectImport, dispatch),
  placementSelect: bindActionCreators(placementSelectImport, dispatch),
  placementConfirmModalShow: bindActionCreators(placementConfirmModalShowImport, dispatch),
  rememberPlacementToGoAfterConfirm:
    bindActionCreators(rememberPlacementToGoAfterConfirmImport, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsList);
