import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  reduxForm, Field, getFormValues, Form,
} from 'redux-form';
import { connect } from 'react-redux';

import required from '../../../validations';

import Checkbox from '../../Form/Checkbox/index';
import Input from '../../Form/Input/index';
import Select from '../../Form/Select/index';
import API from '../../../../API';

const getOptions = (optionsValues) => {
  if (!optionsValues || !Array.isArray(optionsValues)) {
    return null;
  }

  return optionsValues.map(o => ({ value: o, label: o }));
};

class PlacementSettings extends Component {
  constructor(props) {
    super(props);

    this.state = { loader: false };

    this.save = this.save.bind(this);
  }

  save(values) {
    this.setState({ loader: true });
    API.request('updatePlacement', 'POST', values)
      .then(() => window.setTimeout(() => {
        this.setState({
          loader: false,
        });
      }, 1000));
  }

  render() {
    const {
      settings, formValues, placement, onSettingsChange, handleSubmit, close,
    } = this.props;
    const { loader } = this.state;
    const adUnitType = formValues && formValues.adUnitType;
    const adUnitTypeSettings = settings[adUnitType || placement.adUnitType];
    const adUnitTypes = Object.keys(settings);
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
                  onChange={onSettingsChange}
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
                  onChange={onSettingsChange}
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
                  onOptionSelected={onSettingsChange}
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
        <Form onSubmit={handleSubmit(this.save)}>
          <div className="placement-settings__loader-container">
            {loader ? <div className="loader" /> : null}
            <div className="placement-settings__fields-container">
              <div className="placement-settings__heading-container">
                <button
                  type="button"
                  onClick={close}
                  className="placement-settings__close icon icon-regular material-icons isCursorPointer">
                  close
                </button>
                <h4 className="heading heading--small heading--thin heading--no-offset">
                  {placement.name}
                  (
                  { placement.id }
                  )
                </h4>
              </div>
              <div className="placement-settings__field-container">
                <Field
                  name="name"
                  label="Name"
                  validate={[required]}
                  component={Input}
                  onChange={onSettingsChange}
                />
              </div>

              <div className="placement-settings__field-container">
                <Field
                  name="adUnitType"
                  label="Ad Unit"
                  options={getOptions(adUnitTypes)}
                  component={Select}
                  onOptionSelected={onSettingsChange}
                />
              </div>

              <div className="placement-settings__field-container">
                <Field
                  name="status"
                  label="Status"
                  options={[
                    { value: 'active', label: 'Active' },
                    { value: 'inactive', label: 'Inactive' },
                  ]}
                  component={Select}
                  onOptionSelected={onSettingsChange}
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

PlacementSettings.defaultProps = {
  settings: {},
  placement: null,
  formValues: null,
  onSettingsChange: null,
  close: null,
  handleSubmit: null,
};

PlacementSettings.propTypes = {
  placement: PropTypes.shape(),
  settings: PropTypes.shape(),
  formValues: PropTypes.shape(),
  onSettingsChange: PropTypes.func,
  close: PropTypes.func,
  handleSubmit: PropTypes.func,
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
