import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const withStopPropagationNativeEvent = (WrappedComponent) => {
  class WithStopPropagationNativeEvent extends Component {
    componentDidMount() {
      // https://stackoverflow.com/a/40522282
      ReactDOM.findDOMNode(this).addEventListener('click', this.props.onClick);
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return WithStopPropagationNativeEvent;
};

export default withStopPropagationNativeEvent;
