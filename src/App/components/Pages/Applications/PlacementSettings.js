import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import Checkbox from '../../Form/Checkbox';
import Input from '../../Form/Input';
import Select from '../../Form/Select';
import API from '../../../../API';

const getOptions = (optionsValues) => {
  if (!optionsValues || !Array.isArray(optionsValues)) {
    return null;
  }

  return optionsValues.map(o => ({value: o, label: o}));
};

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
              <div
                key={key}
                className="placement-settings__field-container placement-settings__field-container--offset-s">
                <Field
                  name={key}
                  label={props.label}
                  value={this.props.placement[key]}
                  component={Input}
                />
              </div>
            );
          case 'boolean':
            return (
              <div
                key={key}
                className="placement-settings__field-container placement-settings__field-container--offset-s">
                <Field
                  name={key}
                  label={props.label}
                  component={Checkbox}
                />
              </div>
            );
          case 'select':
          case 'list':
            return (
              <div
                key={key}
                className="placement-settings__field-container placement-settings__field-container--offset-s">
                <Field
                  name={key}
                  label={props.label}
                  value={this.props.placement[key]}
                  options={getOptions(props.options)}
                  component={Select}
                />
              </div>
            );
          default:
            return null;
        }
      })
    : null;
    return (
      <div className="placement-settings">
        <form onSubmit={this.props.handleSubmit(this.save)}>
          <div className="placement-settings__loader-container">
            {this.state.loader ? <div className="loader"/> : null}
            <div className="placement-settings__fields-container">
              <div className="placement-settings__heading-container">
                <h4 className="heading heading--small heading--thin heading--no-offset">
                  {this.props.placement.name} ({this.props.placement.id})
                </h4>
              </div>
              <div className="placement-settings__field-container">
                <Field
                  name="name"
                  label="Name"
                  component={Input}
                />
              </div>

              <div className="placement-settings__field-container">
                <Field
                  name="adUnitType"
                  label="Ad Unit"
                  value={this.props.placement.adUnitType}
                  options={getOptions(adUnitTypes)}
                  component={Select}
                />
              </div>

              <div className="placement-settings__field-container">
                <Field
                  name="status"
                  label="Status"
                  value={this.props.placement.status}
                  options={[
                    {value: 'active', label: 'Active'},
                    {value: 'inactive', label: 'Inactive'}
                  ]}
                  component={Select}
                />
              </div>

              {extraFields}
            </div>
            <div className="placement-settings__cta-container">
              <button
                type="submit"
                className="btn btn--height-l btn--full-width btn-chetwod-blue btn-border-chetwod-extra-blue">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PlacementSettings.propTypes = {
  placement: PropTypes.object.isRequired,
  settings: PropTypes.object,
};

PlacementSettings.defaultProps = {
  settings: {}
};

const reduxFormed = reduxForm({
  form: 'placementSettings'
})(PlacementSettings);

const mapStateToProps = (state, props) => ({
  initialValues: props.placement
});

export default connect(mapStateToProps)(reduxFormed);
