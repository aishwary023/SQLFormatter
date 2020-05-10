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

      //make syntax statements from tokens
      //check first letter of statement
      //ex if it is select
      //create a function to check it if follows all possible syntaxes of select
      //check for all possible syntaxes/statements
    });

    return error;
  };
}

export default Validiator;
