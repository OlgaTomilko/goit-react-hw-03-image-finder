import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

class ImageGallery extends Component {
  handleImageClick = (event) => {
    this.props.onImageClick(event.target.id);
  };

  render() {
    return (
      <ul className="ImageGallery" onClick={this.handleImageClick}>
        {this.props.images.map(({ id, webformatURL }) => (
          <ImageGalleryItem key={id} imageURL={webformatURL} id={id} />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
