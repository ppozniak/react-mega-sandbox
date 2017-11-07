import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = { error: false }
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(info);
    console.log(error);
  }

  render() {
    if ( this.state.error ) {
      return <h1>SORR THERES ERROR M8</h1>;
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary;
