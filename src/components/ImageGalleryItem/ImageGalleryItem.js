import React, { Component } from "react";
import "./ImageGalleryItem.css";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li>
        <img
          src={this.props.imageURL}
          alt=""
          className="ImageGalleryItem-image"
          id={this.props.id}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
