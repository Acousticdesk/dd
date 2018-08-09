import React from 'react';

export default () => {
  return (
    <div className="placement-settings">
      <div className="placement-settings__fields-container">
        <div className="placement-settings__heading-container">
          <h4 className="heading heading--small heading--thin heading--no-offset">Placement (2091)</h4>
        </div>

        <div className="placement-settings__field-container">
          <div className="input">
            <label className="input__label color--grey-lighter">Name</label>
            <input type="text" className="input__field color--dark" placeholder="" defaultValue="Interstitial Video"/>
          </div>
        </div>

        <div className="placement-settings__field-container">
          <div className="input">
            <label className="input__label color--grey-lighter">Ad Unit</label>
            <input type="text" className="input__field color--dark" placeholder="" defaultValue="Interstitial"/>
          </div>
        </div>

        <div className="placement-settings__field-container">
          <div className="input">
            <label className="input__label color--grey-lighter">Status</label>
            <input type="text" className="input__field color--dark" placeholder="" defaultValue="Active"/>
          </div>
        </div>

        <div className="placement-settings__field-container placement-settings__field-container--offset-s">
          <span className="checkbox-radio-common checkbox">
            <input type="checkbox"/>
            <span className="checkbox-radio-common__ui checkbox__ui color--white text-center material-icons isCursorPointer">done</span>
            <span className="color--dark text-bold isCursorPointer">Fullscreen Ads</span>
          </span>
        </div>

        <div className="placement-settings__field-container placement-settings__field-container--offset-s">
          <span className="checkbox-radio-common checkbox">
            <input type="checkbox"/>
            <span className="checkbox-radio-common__ui checkbox__ui color--white text-center material-icons isCursorPointer">done</span>
            <span className="color--dark text-bold isCursorPointer">Video Ads</span>
          </span>
        </div>
      </div>

      <div className="placement-settings__cta-container">
        <button className="btn btn--height-l btn--full-width btn-chetwod-blue btn-border-chetwod-extra-blue">Save</button>
      </div>
    </div>
  );
}
