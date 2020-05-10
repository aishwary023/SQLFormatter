import { Component } from "react";

class Validiator extends Component {
  validiate = (tokens) => {
    if (this.syntaxIsCorrect) return true;
    else return false;
  };

  syntaxIsCorrect = (tokens) => {
    var error = false;

    tokens.forEach((token) => {
      const data = token.value;
    });

    return error;
  };
}

export default Validiator;
