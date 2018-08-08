import React from 'react';

import open from '../../../static/assets/icons/open.svg';
import dashboard from '../../../static/assets/icons/dashboard.svg';
import apps from '../../../static/assets/icons/apps.svg';
import reports from '../../../static/assets/icons/reports.svg';
import downloads from '../../../static/assets/icons/downloads.svg';
import documentation from '../../../static/assets/icons/documentation.svg';
import NoApps from '../../../static/assets/icons/no-apps.svg';
import logo from '../../../static/assets/logo/@1x.png';
import appPlaceholder from '../../../static/assets/applications-page/app-placeholder.png';
// import appPlaceholder2 from '../../../static/assets/applications-page/app-placeholder_2.png';

import Dropdown from '../components/Dropdown';

const iconsArray = [
  {open},
  {dashboard},
  {apps},
  {reports},
  {downloads},
  {documentation}
];

export default () => {
  return (
    <div className="l-applications">
      <div>
        <nav className="sidenav">
          <ul>
            {
              iconsArray.map(icon => {
                const iconName = Object.keys(icon)[0];
                const IconComponent = icon[iconName];
                const activeClass = iconName === 'apps' ? 'active' : '';
                return (
                  <li className={`item item--${iconName} ${activeClass}`}>
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
            <i className="icon icon-regular icon--notification material-icons is-cursor-pointer">notifications</i>
          </div>
          <div className="l-header__user-container text-center is-cursor-pointer">
            <p className="text">
              carmitbaro@gmail.com
              <i className="material-icons">arrow_drop_down</i>
            </p>
          </div>
        </header>
        <div className="l-sub-header">
          <div className="l-sub-header__search-container">
            <div className="search-bar is-rounded-borders">
              <input className="text--light" type="text" placeholder="Search apps by name, type..."/>
            </div>
          </div>
          <div className="l-sub-header__sort-container is-cursor-pointer">
            <p className="text">
              Sort By: Name
              <i className="material-icons">arrow_drop_down</i>
            </p>
          </div>
          <div className="l-sub-header__cta-container">
            <button className="btn btn-regular btn-regular--bordered">New Application</button>
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
                        <span className="app-info__title text--lead text--dark">Bluetooth App Sender (5666)</span>
                      </p>
                      <div className="app-info__info-row">
                        <div className="app-info__status-col">
                          <span className="text--lighter">Status: </span>
                          <span className="text--dark">Active</span>
                        </div>
                        <div className="app-info__package-col">
                          <span className="text--lighter">Package: </span>
                          <span className="text--dark">com.mram.blueappsender</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="application-card__options-container">
                    <Dropdown/>
                  </div>
                </div>
                <div className="placements">
                  <div className="placements__header">
                    <div className="placements__legend-container text--dark text--bold">Placements</div>
                    <div className="placements__cta-container">
                      <button className="btn btn-regular btn--bigger">
                        <span className="btn__icon-container btn__icon-container--center">
                          <i className="icon icon-purple icon--small material-icons">add</i>
                        </span>
                        New Placement
                      </button>
                    </div>
                  </div>
                  <div className="placements__content">
                    <div className="placements__item-column">
                      <div className="placement-card">

                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="l-applications-main__side-bar">
            <div className="no-apps-prompt">
              <div className="no-apps-prompt__icon-container text-center">
                <NoApps/>
              </div>
              <p className="text text--lead text--light text-center">
                Select an App <br/> to view it’s Placement details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
