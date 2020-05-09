import tokenTypes from "./tokenTypes";
import InlineBlock from "./InlineBlock";
import Indentation from "./indentation";
import Params from "./Params";
import includes from "lodash/includes";

class Formatter {
  constructor(tokenizer) {
    this.indentation = new Indentation("     ");
    this.inlineBlock = new InlineBlock();
    this.params = new Params("X");

    this.previousReservedWord = {};
    this.tokens = [];
    this.index = 0;
  }
  format = (tokens) => {
    console.log("inside formatter");
    const finalSQL = this.getFormattedSQL(tokens);
    return finalSQL;
  };

  getFormattedSQL = (tokens) => {
    let finalSQL = "";
    let previousReservedWord = {};

    tokens.forEach((token, index) => {});

    return finalSQL;
  };
}

export default Formatter;
