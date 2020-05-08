import React, { Component } from "react";

class Output extends Component {
  state = {};
  render() {
    return (
      <div className="input-group" id="outputText">
        <div className="input-group-prepend"></div>
        <textarea
          className="form-control"
          id="outputSQL"
          placeholder="Formatted SQL will appear here!"
        ></textarea>
      </div>
    );
  }
}

export default Output;
