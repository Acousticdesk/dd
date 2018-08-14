import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Input from './Input';
import InputDropdown from './InputDropdown';

class PlacementSettings extends Component {
  render() {
    const adUnitTypeSettings = this.props.settings[this.props.placement.adUnitType];
    const schema = adUnitTypeSettings && adUnitTypeSettings.schema;

    const extraFields = schema
      ? Object.entries(schema).map(([key, props]) => {
        switch (props.type) {
          case 'boolean':
            return (
              <div key={key} className="placement-settings__field-container placement-settings__field-container--offset-s">
                <Checkbox label={props.label} checked={props.default}/>
              </div>
            );
          case 'select':
            return (
              <div key={key} className="placement-settings__field-container placement-settings__field-container--offset-s">
                <InputDropdown label={props.label} defaultValue={props.default || props.options[0]} items={props.options}/>
              </div>
            );
          default:
            return null;
        }
      })
    : null;

    return (
      <div className="placement-settings">
        <div className="placement-settings__fields-container">
          <div className="placement-settings__heading-container">
            <h4 className="heading heading--small heading--thin heading--no-offset">
              {this.props.placement.name} ({this.props.placement.id})
            </h4>
          </div>

          <div className="placement-settings__field-container">
            <Input name="name" label="Name" value={this.props.placement.name}/>
          </div>

          <div className="placement-settings__field-container">
            <InputDropdown defaultValue="Banner" items={['Banner', 'In-Feed', 'Interstitial']}/>
          </div>

          <div className="placement-settings__field-container">
            <InputDropdown label="Status" defaultValue="Active" items={['Active', 'Inactive']}/>
          </div>

          {extraFields}
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

PlacementSettings.defaultProps = {
  settings: {}
};

export default PlacementSettings;
