import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";
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

ImageGallery.propTypes = {
  onImageClick: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};
