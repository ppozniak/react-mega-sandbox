import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: false
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
    console.log(info);
    console.log(error);
  }

  render() {
    return this.state.error ? <h1>SORR THERES ERROR M8</h1> : this.props.children
  }
}
