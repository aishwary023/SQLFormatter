import React, { Component } from "react";

class Input extends Component {
  state = {};
  render() {
    return (
      <div className="input-group" id="inputText">
        <div className="input-group-prepend"></div>
        <textarea
          id="inputSQL"
          className="form-control"
          onChange={this.props.onChange}
          placeholder="Input SQL Query here!"
        ></textarea>
      </div>
    );
  }
}

export default Input;
