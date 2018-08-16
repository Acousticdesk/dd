import React, { Component } from 'react';

import PlatformSelect from './PlatformSelect';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Input from './Input';
import API from '../../API';

const stopPropagation = (e) => e.stopPropagation();

class NewApp extends Component {
  state = {status: 'active', integration: null, platform: null};

  create = () => {
    API.request('createApp', 'POST', this.state);
  };

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
            <PlatformSelect onChange={(platform) => this.setState({platform})}/>
            <div className="integration-select">
              <div className="integration-select__legend-container">
                <div className="text-lead color--dark">Select Integration</div>
              </div>
              <div className="integration-select__options-container">
                <Radio name="integration" onChange={() => {
                  this.setState({integration: 'SDK'})
                }} checked={this.state.integration === 'SDK'} label="SDK"/>
                <Radio name="integration" onChange={() => this.setState({integration: 'JS Tag'})} checked={this.state.integration === 'JS Tag'} label="JS Tag"/>
                <Radio name="integration" onChange={() => this.setState({integration: 'API'})} checked={this.state.integration === 'API'} label="API"/>
              </div>
            </div>
            <div className="application-info">
              <div className="application-info__field-container">
                <Input
                  onChange={({value}) => this.setState({package: value})}
                  name="name"
                  label="Package Name"
                />
              </div>
              <div className="application-info__field-container">
                <Input
                  onChange={({value}) => this.setState({name: value})}
                  label="Application Name"
                />
              </div>
              <div className="application-info__field-container">
                <p className="input__label color--grey-lighter">Status</p>
                <Checkbox
                  onChange={() => this.setState(state => ({status: state.status === 'active' ? 'inactive' : 'active'}))}
                  checked={this.state.status === 'active'}
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
                <button onClick={this.create} className="btn btn--height-l btn-chetwod-blue btn-border-chetwod-extra-blue">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewApp;
