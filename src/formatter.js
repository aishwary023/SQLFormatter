import tokenTypes from "./tokenTypes";
import Params from "./Params";
import includes from "lodash/includes";

class Formatter {
  format = (tokens) => {
    console.log("inside formatter", tokens);

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
