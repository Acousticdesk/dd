import React from 'react';
import PropTypes from 'prop-types';

import IntegrateIcon from '../../../../static/assets/icons/integrate.svg';

const Placements = ({placements, selectPlacement, selectedPlacement, zendesk, appIntegration, deletePlacement, settings}) => {
  return (
    <div className="placements">
      <div className="placements__header">
        <div className="placements__legend-container text-bold color--dark">Placements</div>
        <div className="placements__cta-container">
          <button className="btn btn--bigger btn-regular color--chetwod-blue">
            <span className="btn__icon-container btn__icon-container--center">
              <i className="icon icon-chetwod-blue icon--small material-icons">add</i>
            </span>
            New Placement
          </button>
        </div>
      </div>
      <div className="placements__content ">
        {Object.entries(placements).map(([id, placement]) => {
          return (
            <div key={id} className="placements__item-col">
              <div onClick={selectPlacement(id)} className={`card-selectable placement-card isCursorPointer ${selectedPlacement === placement ? 'selected' : ''}`}>
                <div className="placement-card__content">
                  <div className="placement-summary text-center text--smaller">
                    <div className="placement-summary__icon-container">
                      <div className="placement-type-icon-placeholder"/>
                    </div>
                    <div className="placement-summary__name-container">
                      <p className="color--dark">{placement.name} ({id})</p>
                    </div>
                    <p className="color--dark">
                      <span className="color--grey-lighter">Status: </span>
                      {placement.status}
                    </p>
                  </div>
                </div>
                <div className="placement-card__footer">
                  <div className="placement-card__footer-col">
                    <a
                      onClick={e => e.stopPropagation()}
                      target="_blank"
                      href={zendesk[appIntegration][placement.adUnitType]}
                      className="btn btn-regular color--grey"
                    >
                      <span className="btn__icon-container btn__icon-container--center">
                        <IntegrateIcon/>
                      </span>
                      Integrate
                    </a>
                  </div>
                  <div className="placement-card__footer-col">
                    <button onClick={deletePlacement} className="btn btn-regular color--grey">
                      <span className="btn__icon-container btn__icon-container--center">
                        <i className="icon icon-regular material-icons">delete</i>
                      </span>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Placements.propTypes = {
  placements: PropTypes.object.isRequired,
  selectPlacement: PropTypes.func.isRequired,
  selectedPlacement: PropTypes.object,
  zendesk: PropTypes.object.isRequired,
  appIntegration: PropTypes.string.isRequired,
  deletePlacement: PropTypes.func.isRequired,
};

export default Placements;
