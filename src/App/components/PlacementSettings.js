import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

class PlacementSettings extends Component {
  state = {
    settings: {}
  };

  onFieldChange = (evt) => {
    evt.persist();
    const {target} = evt;

    this.setState({
      settings: {
        [target.name]: target.value
      }
    });
  };

  render() {
    return (
      <div className="placement-settings">
        <div className="placement-settings__fields-container">
          <div className="placement-settings__heading-container">
            <h4 className="heading heading--small heading--thin heading--no-offset">
              {this.state.settings.name || this.props.placement.name} ({this.props.placement.id})
            </h4>
          </div>

          <div className="placement-settings__field-container">
            <div className="input">
              <label className="input__label color--grey-lighter">Name</label>
              <input
                type="text"
                name="name"
                className="input__field color--dark"
                placeholder=""
                onChange={this.onFieldChange}
                defaultValue={this.props.placement.name}
                value={this.state.name}
              />
            </div>
          </div>

          <div className="placement-settings__field-container">
            <div className="input">
              <label className="input__label color--grey-lighter">Ad Unit</label>
              <input
                type="text"
                name="ad_unit"
                className="input__field color--dark"
                placeholder=""
                onChange={this.onFieldChange}
                value={this.props.placement.adUnitType}
              />
            </div>
          </div>

          <div className="placement-settings__field-container">
            <div className="input">
              <label className="input__label color--grey-lighter">Status</label>
              <input
                type="text"
                name="status"
                className="input__field color--dark"
                placeholder=""
                onChange={this.onFieldChange}
                value={this.props.placement.status}
              />
            </div>
          </div>

          <div className="placement-settings__field-container placement-settings__field-container--offset-s">
            <Checkbox name="fullscreen_ads" label="Fullscreen Ads" onChange={this.onFieldChange}/>
          </div>

          <div className="placement-settings__field-container placement-settings__field-container--offset-s">
            <Checkbox name="video_ads" label="Video Ads" onChange={this.onFieldChange} />
          </div>
        </div>

        <div className="placement-settings__cta-container">
          <button className="btn btn--height-l btn--full-width btn-chetwod-blue btn-border-chetwod-extra-blue">Save</button>
        </div>
      </div>
    );
  }
}

PlacementSettings.propTypes = {
  placement: PropTypes.object.isRequired
};

export default PlacementSettings;
