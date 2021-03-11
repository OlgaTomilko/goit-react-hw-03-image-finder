import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.images.map(({ id, webformatURL }) => (
          <ImageGalleryItem key={id} imageURL={webformatURL} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
