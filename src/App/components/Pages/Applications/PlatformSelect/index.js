import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlatformsList from './PlatformsList';
import PlatformSelectPresentation from './Presentation';

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

  getPlatformList() {
    return (
      <PlatformsList
        platforms={this.platforms}
        selected={this.state.selected}
        onSelectPlatform={this.onSelectPlatform}
      />
    );
  }

  render() {
    return <PlatformSelectPresentation platformsList={this.getPlatformList()}/>;
  }
}

PlatformSelect.propTypes = {
  onChange: PropTypes.func
};

export default PlatformSelect;
