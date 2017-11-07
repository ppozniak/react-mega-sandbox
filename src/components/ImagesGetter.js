import React, { Component } from 'react';
import unsplash from '../components/hoc/unsplash';

class ImageGetter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <div>
        { this.props.images.map( (image, i) => <img src={image} key={i} alt="" /> ) }
      </div>
     )
  }
}

export default unsplash(
  ImageGetter,
  'random/150x150'
);