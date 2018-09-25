import React, { Component } from 'react';
import UnsplashHOC from './UnsplashHOC';

class ImageGetter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.images.map((image, i) => (
          <img src={image} key={i} alt="" />
        ))}
      </div>
    );
  }
}

export default UnsplashHOC(ImageGetter, 'random/150x150');
