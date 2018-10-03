import React from 'react';
import PropTypes from 'prop-types';

import EditDropdown from '../EditDropdown';
import Placements from '../Placements';
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
  onDeleteApp,
  packageName,
  placements,
}) => {
  return (
    <li className="l-applications-list__row">
      <div onClick={select(app.id)} className="application-card isCursorPointer">
        <div className="application-card__icon-container text-center">
          <AppIcon url={app.iconUrl}/>
        </div>
        <div className="application-card__info-container">
          <div className="app-info">
            <p className="app-info__title-row">
              <IntegrationIcon platform={app.platform}/>
              <span className="app-info__title text-lead color--dark">{app.name} ({app.id})</span>
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
          <EditDropdown onEditClick={onEditApp} onDeleteClick={onDeleteApp} />
        </div>
      </div>
      <RenderPlacements
        isSelected={isSelected}
        placements={
          <Placements
            appPlatform={app.platform}
            placements={placements}
            placementSelect={placementSelect}
            selectedPlacement={selectedPlacement}
            zendesk={zendesk}
          />
        }
      />
    </li>
  );
};

Application.propTypes = {
  app: PropTypes.object,
  isSelected: PropTypes.bool,
  select: PropTypes.func,
  placementSelect: PropTypes.func,
  selectedPlacement: PropTypes.object,
  zendesk: PropTypes.object,
  onEditApp: PropTypes.func,
  onDeleteApp: PropTypes.func,
  placements: PropTypes.object,
};

export default Application;
