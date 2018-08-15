import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Input from './Input';
import InputDropdown from './InputDropdown';
import API from '../../API';

class PlacementSettings extends Component {
  state = {loader: false};

  save = () => {
    this.setState({loader: true});
    API.request('updatePlacement', 'POST', this.props.placement)
      .then(() => window.setTimeout(() => this.setState({loader: false}), 1000));
  };

  render() {
    const adUnitTypeSettings = this.props.settings[this.props.placement.adUnitType];
    const adUnitTypes = Object.keys(this.props.settings);
    const schema = adUnitTypeSettings && adUnitTypeSettings.schema;

    const extraFields = schema
      ? Object.entries(schema).map(([key, props]) => {
        switch (props.type) {
          case 'int':
            return (
              <div key={key} className="placement-settings__field-container placement-settings__field-container--offset-s">
                <Input onChange={this.props.onPlacementEdit} name={key} label={props.label} value={this.props.placement[key]}/>
              </div>
            );
          case 'boolean':
            return (
              <div key={key} className="placement-settings__field-container placement-settings__field-container--offset-s">
                <Checkbox onChange={this.props.onPlacementEdit} name={key} label={props.label} checked={this.props.placement[key]}/>
              </div>
            );
          case 'select':
          case 'list':
            return (
              <div key={key} className="placement-settings__field-container placement-settings__field-container--offset-s">
                <InputDropdown onChange={this.props.onPlacementEdit} name={key} label={props.label} value={this.props.placement[key]} items={props.options}/>
              </div>
            );
          default:
            return null;
        }
      })
    : null;
    return (
      <div className="placement-settings">
        { this.state.loader ? <div className="loader"/> : null }
        <div className="placement-settings__fields-container">
          <div className="placement-settings__heading-container">
            <h4 className="heading heading--small heading--thin heading--no-offset">
              {this.props.placement.name} ({this.props.placement.id})
            </h4>
          </div>

          <div className="placement-settings__field-container">
            <Input
              name="name"
              label="Name"
              value={this.props.placement.name}
              onChange={this.props.onPlacementEdit}/>
          </div>

          <div className="placement-settings__field-container">
            <InputDropdown
              name="adUnitType"
              label="Ad Unit"
              value={this.props.placement.adUnitType}
              items={adUnitTypes}
              onChange={this.props.onPlacementEdit}
            />
          </div>

          <div className="placement-settings__field-container">
            <InputDropdown
              name="status"
              label="Status"
              value={this.props.placement.status}
              items={['active', 'inactive']}
              onChange={this.props.onPlacementEdit}
            />
          </div>

          {extraFields}
        </div>
        <div className="placement-settings__cta-container">
          <button
            onClick={this.save}
            className="btn btn--height-l btn--full-width btn-chetwod-blue btn-border-chetwod-extra-blue">
            Save
          </button>
        </div>
      </div>
    );
  }
}

PlacementSettings.propTypes = {
  placement: PropTypes.object.isRequired,
  settings: PropTypes.object,
  onPlacementEdit: PropTypes.func
};

PlacementSettings.defaultProps = {
  settings: {}
};

export default PlacementSettings;
