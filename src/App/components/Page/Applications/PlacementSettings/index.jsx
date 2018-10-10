import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  reduxForm, getFormValues, Form,
} from 'redux-form';
import { connect } from 'react-redux';

import { updatePlacement } from '../../../../../API';
import getExtraFields from './getExtraFields';
import getOptions from './getOptions';

import FieldsContainer from './FieldsContainer';

class PlacementSettings extends Component {
  constructor(props) {
    super(props);

    this.state = { loader: false };

    this.save = this.save.bind(this);
  }

  save(values) {
    this.setState({ loader: true });

    updatePlacement(values);
  }

  render() {
    const {
      settings, formValues, placement, onSettingsChange, handleSubmit, close,
    } = this.props;
    const { loader } = this.state;
    const adUnitType = formValues && formValues.adUnitType;
    const adUnitTypeSettings = settings[adUnitType || placement.adUnitType];
    const adUnitTypes = Object.keys(settings);
    const onSubmit = handleSubmit(this.save);
    const adUnitTypeOptions = getOptions(adUnitTypes);

    const extraFields = getExtraFields(adUnitTypeSettings, onSettingsChange);

    return (
      <div className="placement-settings">
        <Form onSubmit={onSubmit}>
          <div className="placement-settings__loader-container">
            {loader ? <div className="loader" /> : null}

            <FieldsContainer
              adUnitTypeOptions={adUnitTypeOptions}
              onSettingsChange={onSettingsChange}
              extraFields={extraFields}
              close={close}
              placement={placement}
            />

            <div className="placement-settings__cta-container">
              <button
                type="submit"
                className="btn btn--height-l btn--full-width btn-chetwod-blue btn-border-chetwod-extra-blue"
              >
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
