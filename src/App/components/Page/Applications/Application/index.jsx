import React from 'react';
import PropTypes from 'prop-types';

import EditDropdown from '../EditDropdown/index';
import Placements from '../Placements/index';
import AppIcon from './AppIcon';
import IntegrationIcon from './IntegrationIcon';
import RenderPlacements from './RenderPlacements';

const Application = ({
  app,
  isSelected,
  select,
  placementSelect,
  selectedPlacement,
  zendesk,
  onEditApp,
  packageName,
  placements,
}) => (
  <li className="l-applications-list__row">
    <div tabIndex="0" role="button" onKeyDown={select(app.id)} onClick={select(app.id)} className="application-card isCursorPointer">
      <div className="application-card__icon-container text-center">
        <AppIcon url={app.iconUrl} />
      </div>
      <div className="application-card__info-container">
        <div className="app-info">
          <p className="app-info__title-row">
            <IntegrationIcon platform={app.platform} />
            <span className="app-info__title text-lead color--dark">
              {app.name}
              (
              {app.id}
              )
            </span>
          </p>
          <div className="app-info__info-row">
            <div className="app-info__status-col">
              <span className="color--grey-lighter">Status: </span>
              <span className="color--dark">{app.status}</span>
            </div>
            <div className="app-info__package-col">
              <span className="color--grey-lighter">Package: </span>
              <span className="color--dark">{packageName}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="application-card__options-container">
        <EditDropdown onEditClick={onEditApp} />
      </div>
    </div>
    <RenderPlacements
      isSelected={isSelected}
      placements={(
        <Placements
          appPlatform={app.platform}
          placements={placements}
          placementSelect={placementSelect}
          selectedPlacement={selectedPlacement}
          zendesk={zendesk}
        />
      )}
    />
  </li>
);

Application.defaultProps = {
  app: null,
  isSelected: null,
  select: null,
  placementSelect: null,
  selectedPlacement: null,
  zendesk: null,
  onEditApp: null,
  placements: null,
  packageName: null,
};

Application.propTypes = {
  app: PropTypes.shape(),
  isSelected: PropTypes.bool,
  select: PropTypes.func,
  placementSelect: PropTypes.func,
  selectedPlacement: PropTypes.shape(),
  zendesk: PropTypes.shape(),
  onEditApp: PropTypes.func,
  placements: PropTypes.shape(),
  packageName: PropTypes.string,
};

export default Application;
