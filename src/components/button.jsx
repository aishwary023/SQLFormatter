import React, { Component } from "react";

class Button extends Component {
  state = {};
  render() {
    return (
      <button
        className="btn btn-warning btn-lg "
        id="formatBtn"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
