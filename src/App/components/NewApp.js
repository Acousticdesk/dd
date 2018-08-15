import React, { Component } from 'react';

import PlatformSelect from './PlatformSelect';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Input from './Input';

const stopPropagation = (e) => e.stopPropagation();

class NewApp extends Component {
  state = {switch: false, checked: null};

  render() {
    const {close} = this.props;
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
            <PlatformSelect/>
            <div className="integration-select">
              <div className="integration-select__legend-container">
                <div className="text-lead color--dark">Select Integration</div>
              </div>
              <div className="integration-select__options-container">
                <Radio onChange={() => {
                  this.setState({checked: 'SDK'})
                }} checked={this.state.checked === 'SDK'} label="SDK"/>
                <Radio onChange={() => this.setState({checked: 'JS Tag'})} checked={this.state.checked === 'JS Tag'} label="JS Tag"/>
                <Radio onChange={() => this.setState({checked: 'API'})} checked={this.state.checked === 'API'} label="API"/>
              </div>
            </div>
            <div className="application-info">
              <div className="application-info__field-container">
                <Input label="Package Name" defaultValue="supercell.clashofclans.com"/>
              </div>
              <div className="application-info__field-container">
                <Input label="Application Name" defaultValue="my new app1"/>
              </div>
              <div className="application-info__field-container">
                <p className="input__label color--grey-lighter">Status</p>
                <Checkbox
                  onChange={() => this.setState(state => ({switch: !state.switch}))}
                  checked={this.state.switch}
                  label="Active"
                  theSwitch
                />
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
  }
}

export default NewApp;
