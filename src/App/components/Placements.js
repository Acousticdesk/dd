import React from 'react';

import IntegrateIcon from '../../../static/assets/icons/integrate.svg';

export default () => {
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
        {(new Array(3)).fill(undefined).map((i, index) => (
          <div key={index} className="placements__item-col">
            <div className="placement-card">
              <div className="placement-card__content">
                <div className="placement-summary text-center text--smaller">
                  <div className="placement-summary__icon-container">
                    <div className="placement-type-icon-placeholder"/>
                  </div>
                  <div className="placement-summary__name-container">
                    <p className="color--dark">Interstitial Static (2091)</p>
                  </div>
                  <p className="color--dark">
                    <span className="color--grey-lighter">Status: </span>
                    Active
                  </p>
                </div>
              </div>
              <div className="placement-card__footer">
                <div className="placement-card__footer-col">
                  <button className="btn btn-regular color--grey">
                    <span className="btn__icon-container btn__icon-container--center">
                      <IntegrateIcon/>
                    </span>
                    Integrate
                  </button>
                </div>
                <div className="placement-card__footer-col">
                  <button className="btn btn-regular color--grey">
                    <span className="btn__icon-container btn__icon-container--center">
                      <i className="icon icon-regular material-icons">delete</i>
                    </span>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
