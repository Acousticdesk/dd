import React from 'react';
import PropTypes from 'prop-types';

import IntegrateIcon from '../../../../../../static/assets/icons/integrate.svg';
import InterstitialIcon from '../../../../../../static/assets/icons/adUnits/interstitial.svg';
import BannerIcon from '../../../../../../static/assets/icons/adUnits/banner.svg';

const stopPropagation = evt => evt.stopPropagation();

const AdUnitIcon = ({ type }) => {
  if (type === 'Interstitial') {
    return <InterstitialIcon />;
  }

  return <BannerIcon />;
};

AdUnitIcon.defaultProps = {
  type: null,
};

AdUnitIcon.propTypes = {
  type: PropTypes.string,
};

const PlacementPresentation = ({
  placementSelect,
  selectedClassName,
  placement,
  zendeskUrl,
  deletePlacement,
}) => (
  <div className="placements__item-col">
    <div
      tabIndex="0"
      role="button"
      onClick={placementSelect}
      onKeyDown={placementSelect}
      className={`card-selectable placement-card isCursorPointer ${selectedClassName}`}
    >
      <div className="placement-card__content">
        <div className="placement-summary text-center text--smaller">
          <div className="placement-summary__icon-container">
            <AdUnitIcon type={placement.adUnitType} />
          </div>
          <div className="placement-summary__name-container">
            <p className="color--dark">
              {placement.name}
              (
              {placement.id}
              )
            </p>
          </div>
          <p className="color--dark">
            <span className="color--grey-lighter">Status: </span>
            {placement.status}
          </p>
        </div>
      </div>
      <div className="placement-card__footer">
        <div className="placement-card__footer-col text-center">
          <a
            onClick={stopPropagation}
            target="_blank"
            rel="noopener noreferrer"
            href={zendeskUrl}
            className="btn btn-regular color--grey"
          >
            <span className="btn__icon-container btn__icon-container--center">
              <IntegrateIcon />
            </span>
            Integrate
          </a>
        </div>
        <div className="placement-card__footer-col text-center">
          <button type="button" onClick={deletePlacement(placement.id)} className="btn btn-regular color--grey">
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

PlacementPresentation.defaultProps = {
  placementSelect: null,
  selectedClassName: null,
  placement: null,
  zendeskUrl: null,
  deletePlacement: null,
};

PlacementPresentation.propTypes = {
  placementSelect: PropTypes.func,
  selectedClassName: PropTypes.string,
  placement: PropTypes.shape(),
  zendeskUrl: PropTypes.string,
  deletePlacement: PropTypes.func,
};

export default PlacementPresentation;
