import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppleIcon from '../../../static/assets/icons/apple.svg';

class PlatformSelect extends Component {
  platforms = ['iOS', 'Android'];
  state = {selected: null};

  onSelectPlatform = (evt) => {
    evt.persist();

    this.setState({
      selected: evt.currentTarget.dataset.value
    });

    if (!this.props.onChange || typeof this.props.onChange !== 'function') {
      return;
    }

    this.props.onChange(this.state.selected);
  };

  render() {
    return (
      <div className="platform-select">
        <p className="text-lead color--dark">Choose your platform</p>
        <div className="platform-select__options-container">
          {
            this.platforms.map(p => (
              <div
                key={p}
                data-value={p}
                onClick={this.onSelectPlatform}
                className="platform-select__option-col"
              >
                <div className={`
                  card-selectable
                  platform-select__option
                  text-center
                  isCursorPointer
                  ${this.state.selected === p ? 'selected' : ''}
                `}>
                  <div className="platform-select__option-content">
                    <div className="platform-select__icon-container">
                      {
                        p === 'iOS'
                          ? <AppleIcon className="platform-select__icon"/>
                          : <i className="platform-select__icon icon icon--large icon-regular material-icons">android</i>
                      }
                    </div>
                    <p className="text-lead">{p}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

PlatformSelect.propTypes = {
  onChange: PropTypes.func
};

export default PlatformSelect;
