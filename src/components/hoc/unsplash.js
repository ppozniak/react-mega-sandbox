import React, { Component } from 'react';

export default function unsplash(WrappedComponent, url = 'random', params = '') {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        images: []
      };
    }

    fetchImages = () => {
      const checkServerResponse = res => res.ok ? res : new Error(res.statusText);
      const returnBlob = res => res.blob();
      const createUrl = blob => URL.createObjectURL( blob );
      const pushToArray = url => {
        this.setState({
          images: [...this.state.images, url]
        })
      };
      const handleError = error => console.error(error);

      // /random/150x150x?sig=123
      // /150x150/?sig=123&sloth

      for ( let i = 0; i < 10; i++ ) {
        fetch(`https://source.unsplash.com/${url}?sig=${i}&${params}`)
        .then( checkServerResponse )
        .then( returnBlob )
        .then( createUrl )
        .then( pushToArray )
        .catch( handleError );
      }
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
