import React from 'react';
import PropTypes from 'prop-types';

import EditDropdown from '../components/EditDropdown';
import Placements from '../components/Placements';
import AppleIcon from '../../../static/assets/icons/apple.svg';

const Application = ({app, isSelected, select, selectPlacement, selectedPlacement, zendesk, deletePlacement}) => {
  return (
    <li className="l-applications-list__row">
      <div className="application-card">
        <div className="application-card__icon-container text-center">
          {app.iconUrl
            ? <img src={app.iconUrl} width="36px" alt=""/>
            : <i className="icon icon-regular icon--large material-icons">smartphone</i>
          }
        </div>
        <div className="application-card__info-container">
          <div className="app-info">
            <p className="app-info__title-row">
              {
                app.integration === 'ios'
                  ? <AppleIcon width="16px" height="16px" className="platform-select__icon"/>
                  : <i className="platform-select__icon icon icon--small icon-regular material-icons">android</i>
              }
              <span className="app-info__title text-lead color--dark">{app.name} ({app.id})</span>
            </p>
            <div className="app-info__info-row">
              <div className="app-info__status-col">
                <span className="color--grey-lighter">Status: </span>
                <span className="color--dark">{app.status}</span>
              </div>
              <div className="app-info__package-col">
                <span className="color--grey-lighter">Package: </span>
                <span className="color--dark">{app.package}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="application-card__options-container">
          <EditDropdown onItemClick={select(app.id)}/>
        </div>
      </div>
      {isSelected && (
        <Placements
          deletePlacement={deletePlacement}
          appIntegration={app.integration}
          placements={app.placements}
          selectPlacement={selectPlacement}
          selectedPlacement={selectedPlacement}
          zendesk={zendesk}
        />
      )}
    </li>
  );
};

Application.propTypes = {
  app: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  selectPlacement: PropTypes.func.isRequired,
  selectedPlacement: PropTypes.object,
  zendesk: PropTypes.object.isRequired,
  deletePlacement: PropTypes.func.isRequired
};

export default Application;
