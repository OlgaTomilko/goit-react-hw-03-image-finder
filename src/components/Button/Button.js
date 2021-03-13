import React, { Component } from "react";
import PropTypes from "prop-types";
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

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
