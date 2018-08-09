import React, { Component } from 'react';

import open from '../../../static/assets/icons/open.svg';
import dashboard from '../../../static/assets/icons/dashboard.svg';
import apps from '../../../static/assets/icons/apps.svg';
import reports from '../../../static/assets/icons/reports.svg';
import downloads from '../../../static/assets/icons/downloads.svg';
import documentation from '../../../static/assets/icons/documentation.svg';
import IntegrateIcon from '../../../static/assets/icons/integrate.svg';
import logo from '../../../static/assets/logo/@1x.png';
import appPlaceholder from '../../../static/assets/applications-page/app-placeholder.png';
// import appPlaceholder2 from '../../../static/assets/applications-page/app-placeholder_2.png';

import Dropdown from '../components/Dropdown';
import PlacementEdit from '../components/PlacementEdit';

const iconsArray = [
  {open},
  {dashboard},
  {apps},
  {reports},
  {downloads},
  {documentation}
];

export default class Applications extends Component {
  state = {
    isAppSelected: false
  };

  selectApp = () => {
    this.setState({
      isAllSelected: true
    });
  };

  render() {
    console.log(this.state.isAppSelected);
    return (
      <div className="l-applications">
        <div>
          <nav className="sidenav">
            <ul>
              {
                iconsArray.map((icon, index) => {
                  const iconName = Object.keys(icon)[0];
                  const IconComponent = icon[iconName];
                  const activeClass = iconName === 'apps' ? 'active' : '';
                  return (
                    <li key={index} className={`item item--${iconName} ${activeClass}`}>
                      <a
                        href="javascript:void(0);"
                      >
                        <IconComponent/>
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </nav>
        </div>

        {/*Main*/}
        <div>
          <header className="l-header">
            <div className="l-header__logo-container text-center">
              <img src={logo} width="22px" alt="Display.io"/>
            </div>
            <div className="l-header__title-container">
              <h4 className="heading heading--med heading--no-offset">Applications</h4>
            </div>
            <div className="l-header__notifications-container text-center">
              <i className="icon icon-regular icon--notification material-icons isCursorPointer">notifications</i>
            </div>
            <div className="l-header__user-container text-center isCursorPointer">
              <p className="color--grey">
                carmitbaro@gmail.com
                <i className="material-icons">arrow_drop_down</i>
              </p>
            </div>
          </header>
          <div className="l-sub-header">
            <div className="l-sub-header__search-container">
              <div className="search-bar isRoundedBorders">
                <input className="color--grey-light" type="text" placeholder="Search apps by name, type..."/>
              </div>
            </div>
            <div className="l-sub-header__sort-container isCursorPointer">
              <p className="color--grey">
                Sort By: Name
                <i className="material-icons">arrow_drop_down</i>
              </p>
            </div>
            <div className="l-sub-header__cta-container">
              <button className="btn btn-regular btn-border-chetwod-blue color--chetwod-blue">New Application</button>
            </div>
          </div>
          <div className="l-applications-main">
            <div className="l-applications-main__apps-container">
              <ul className="l-applications-list">
                <li className="l-applications-list__row">
                  <div className="application-card">
                    <div className="application-card__icon-container text-center">
                      <img src={appPlaceholder} width="36px" alt=""/>
                    </div>
                    <div className="application-card__info-container">
                      <div className="app-info">
                        <p className="app-info__title-row">
                          <i className="icon icon-regular icon--small material-icons">android</i>
                          <span className="app-info__title color--lead color--dark">Bluetooth App Sender (5666)</span>
                        </p>
                        <div className="app-info__info-row">
                          <div className="app-info__status-col">
                            <span className="color--grey-lighter">Status: </span>
                            <span className="color--dark">Active</span>
                          </div>
                          <div className="app-info__package-col">
                            <span className="color--grey-lighter">Package: </span>
                            <span className="color--dark">com.mram.blueappsender</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="application-card__options-container">
                      <Dropdown onEditClick={this.selectApp}/>
                    </div>
                  </div>
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
                </li>
              </ul>
            </div>
            <div className="l-applications-main__side-bar">
              <PlacementEdit app={{}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
