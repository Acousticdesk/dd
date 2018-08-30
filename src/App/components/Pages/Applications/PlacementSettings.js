import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field, getFormValues, Form } from 'redux-form';
import { connect } from 'react-redux';

import { required } from '../../../validations';

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

  save = (values) => {
    this.setState({loader: true});
    API.request('updatePlacement', 'POST', values)
      .then(() => window.setTimeout(() => {
        this.setState({
          loader: false,
        });
        this.props.reset();
      }, 1000));
  };

  render() {
    const adUnitTypeSettings = this.props.settings[this.props.formValues && this.props.formValues.adUnitType || this.props.placement.adUnitType];
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
                  component={Input}
                  onChange={this.props.onSettingsChange}
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
                  onChange={this.props.onSettingsChange}
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
                  options={getOptions(props.options)}
                  component={Select}
                  onOptionSelected={this.props.onSettingsChange}
                />
              </div>
            );
          default:
            return null;
        }
      })
    : null;
    // TODO: Make onchage on every Field component
    return (
      <div className="placement-settings">
        <Form onSubmit={this.props.handleSubmit(this.save)}>
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
                  validate={[required]}
                  component={Input}
                  onChange={this.props.onSettingsChange}
                />
              </div>

              <div className="placement-settings__field-container">
                <Field
                  name="adUnitType"
                  label="Ad Unit"
                  options={getOptions(adUnitTypes)}
                  component={Select}
                  onOptionSelected={this.props.onSettingsChange}
                />
              </div>

              <div className="placement-settings__field-container">
                <Field
                  name="status"
                  label="Status"
                  options={[
                    {value: 'active', label: 'Active'},
                    {value: 'inactive', label: 'Inactive'}
                  ]}
                  component={Select}
                  onOptionSelected={this.props.onSettingsChange}
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
        </Form>
      </div>
    );
  }
}

PlacementSettings.propTypes = {
  placement: PropTypes.object.isRequired,
  settings: PropTypes.object,
  formValues: PropTypes.object,
  onSettingsChange: PropTypes.func,
};

PlacementSettings.defaultProps = {
  settings: {}
};

const selector = getFormValues('placementSettings');

const reduxFormed = reduxForm({
  form: 'placementSettings',
  enableReinitialize: true,
})(PlacementSettings);

const mapStateToProps = (state, props) => ({
  initialValues: props.placement,
  formValues: selector(state),
});

export default connect(mapStateToProps)(reduxFormed);
