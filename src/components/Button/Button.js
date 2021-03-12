import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        type="submit"
        className="LoadMore-button"
        onClick={this.props.onSubmit}
      >
        Load more
      </button>
    );
  }
}

export default Button;
