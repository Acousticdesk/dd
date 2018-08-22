import React from 'react';
import PropTypes from 'prop-types';

import IntegrateIcon from '../../../../../../static/assets/icons/integrate.svg';

const stopPropagation = evt => evt.stopPropagation();

const PlacementPresentation = ({selectPlacement, selectedClassName, placement, zendeskUrl, deletePlacement}) => {
  return (
    <div className="placements__item-col">
      <div onClick={selectPlacement} className={`card-selectable placement-card isCursorPointer ${selectedClassName}`}>
        <div className="placement-card__content">
          <div className="placement-summary text-center text--smaller">
            <div className="placement-summary__icon-container">
              <div className="placement-type-icon-placeholder"/>
            </div>
            <div className="placement-summary__name-container">
              <p className="color--dark">{placement.name} ({placement.id})</p>
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
              onClick={stopPropagation}
              target="_blank"
              href={zendeskUrl}
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
};

PlacementPresentation.propTypes = {
  selectPlacement: PropTypes.func,
  selectedClassName: PropTypes.string,
  placement: PropTypes.object,
  zendeskUrl: PropTypes.string,
  deletePlacement: PropTypes.func
};

export default PlacementPresentation;
