import React from 'react';

const stopPropagation = (e) => e.stopPropagation();

export default ({close}) => {
  return (
    <div onClick={close} className="modal">
      <div onClick={stopPropagation} className="modal__ui">
        <header className="modal__header">
          <div className="modal__title-container">
            <h4 className="heading heading--med heading--thin">New Application</h4>
          </div>
          <div className="modal__close-container text-center">
            <i onClick={close} className="icon icon-light material-icons isCursorPointer">close</i>
          </div>
        </header>
        <div className="modal__content">
          <div className="platform-select">
            <p className="text-lead color--dark">Choose your platform</p>
            <div className="platform-select__options-container">
              <div className="platform-select__option-col">
                <div className="card-selectable platform-select__option text-center isCursorPointer">
                  <div className="platform-select__option-content">
                    <div className="platform-select__icon-container">
                      <i className="platform-select__icon icon icon--large icon-regular material-icons">android</i>
                    </div>
                    <p className="text-lead">iOS</p>
                  </div>
                </div>
              </div>
              <div className="platform-select__option-col">
                <div className="card-selectable platform-select__option text-center isCursorPointer">
                  <div className="platform-select__option-content">
                    <div className="platform-select__icon-container">
                      <i className="platform-select__icon icon icon--large icon-regular material-icons">android</i>
                    </div>
                    <p className="text-lead">Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="integration-select">
            <div className="integration-select__legend-container">
              <div className="text-lead color--dark">Select Integration</div>
            </div>
            <div className="integration-select__options-container">
              <span className="integration-select__option checkbox-radio-common radio selected">
                <input type="radio"/>
                <span className="checkbox-radio-common__ui radio__ui isCursorPointer"/>
                <span className="color--dark text-bold va-middle isCursorPointer">SDK</span>
              </span>
              <span className="integration-select__option checkbox-radio-common radio">
                <input type="radio"/>
                <span className="checkbox-radio-common__ui radio__ui isCursorPointer"/>
                <span className="color--grey-lighter text-bold va-middle isCursorPointer">JS Tag</span>
              </span>
              <span className="integration-select__option checkbox-radio-common radio">
                <input type="radio"/>
                <span className="checkbox-radio-common__ui radio__ui isCursorPointer"/>
                <span className="color--grey-lighter text-bold va-middle isCursorPointer">API</span>
              </span>
            </div>
          </div>
          <div className="application-info">
            <div className="application-info__field-container">
              <div className="input">
                <label className="input__label color--grey-lighter">Package Name</label>
                <input type="text" className="input__field color--dark" placeholder="" defaultValue="supercell.clashofclans.com"/>
              </div>
            </div>
            <div className="application-info__field-container">
              <div className="input">
                <label className="input__label color--grey-lighter">Application Name</label>
                <input type="text" className="input__field color--dark" placeholder="" defaultValue="my new app1"/>
              </div>
            </div>
            <div className="application-info__field-container">
              <p className="input__label color--grey-lighter">Status</p>
              <span className="integration-select__option checkbox-radio-common checkbox">
                <input type="checkbox"/>
                <span className="checkbox-radio-common__ui checkbox__switch-ui isCursorPointer"/>
                <span className="color--dark text-bold va-middle isCursorPointer">Active</span>
              </span>
            </div>
          </div>
        </div>
        <div className="modal__footer">
          <div className="create-app-form__footer">
            <div className="create-app-form__footer-col">
              <button onClick={close} className="btn btn--height-l btn-regular color--grey">Cancel</button>
            </div>
            <div className="create-app-form__footer-col">
              <button className="btn btn--height-l btn-chetwod-blue btn-border-chetwod-extra-blue">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
