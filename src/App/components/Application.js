import React from 'react';
import PropTypes from 'prop-types';

import appPlaceholder from '../../../static/assets/applications-page/app-placeholder.png';

import Dropdown from '../components/Dropdown';
import Placements from '../components/Placements';

const Application = ({app, isSelected, select}) => {
  return (
    <li className="l-applications-list__row">
      <div className="application-card">
        <div className="application-card__icon-container text-center">
          <img src={appPlaceholder} width="36px" alt=""/>
        </div>
        <div className="application-card__info-container">
          <div className="app-info">
            <p className="app-info__title-row">
              <i className="icon icon-regular icon--small material-icons">android</i>
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
          <Dropdown onEditClick={select(app.id)}/>
        </div>
      </div>
      {isSelected && <Placements placements={app.placements}/>}
    </li>
  );
};

Application.propTypes = {
  app: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired
};

export default Application;
