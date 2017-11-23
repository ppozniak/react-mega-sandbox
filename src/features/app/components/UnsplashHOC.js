import React, { Component } from 'react';

export default function unsplash(WrappedComponent, url = 'random', params = '') {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: []
      }
      this.promises = [];
    }

    fetchImages = () => {
      const checkServerResponse = res => res.ok ? res : new Error(res.statusText);
      const returnBlob = res => res.blob();
      const createUrl = blob => URL.createObjectURL( blob );
      const handleError = error => console.error(error);

      for ( let i = 0; i < 10; i++ ) {
        const promise = fetch(`https://source.unsplash.com/${url}?sig=${i}&${params}`);

        this.promises.push(promise);
        console.log(promise);

        promise
        .then( checkServerResponse )
        .then( returnBlob )
        .then( createUrl )
        .catch( handleError );
      }

      Promise.all(this.promises)
      .then( values => this.setState({ images: values.map( value => value.url ) }));
    }

    componentDidMount() {
      this.fetchImages();
    }

    render() {
      return (
        <div>
          <h1>With {url}{params}</h1>
          <WrappedComponent images={ this.state.images || [] } { ...this.props } />
        </div>
      )
    }

  }
}
