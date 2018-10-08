import React, { Component } from 'react';

const withStopPropagationNativeEvent = (WrappedComponent) => {
  class WithStopPropagationNativeEvent extends Component {
    constructor(props) {
      super(props);

      this.ref = React.createRef();
    }

    componentDidMount() {
      const { onClick } = this.props;

      this.ref.current.addEventListener('click', onClick);
    }

    render() {
      return <WrappedComponent {...this.props} savedRef={this.ref} />;
    }
  }

  return WithStopPropagationNativeEvent;
};

export default withStopPropagationNativeEvent;
