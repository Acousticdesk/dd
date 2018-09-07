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
  selectPlacement,
  selectedPlacement,
  zendesk,
  deletePlacement,
  onEditApp,
  onDeleteApp,
  packageName
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
              <IntegrationIcon integration={app.integration}/>
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
            deletePlacement={deletePlacement}
            appIntegration={app.integration}
            placements={app.placements}
            selectPlacement={selectPlacement}
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
  selectPlacement: PropTypes.func,
  selectedPlacement: PropTypes.object,
  zendesk: PropTypes.object,
  deletePlacement: PropTypes.func,
  onEditApp: PropTypes.func,
  onDeleteApp: PropTypes.func,
};

export default Application;
