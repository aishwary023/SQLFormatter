import tokenTypes from "./tokenTypes";
import Params from "./Params";
import includes from "lodash/includes";
import trimEnd from "lodash/trimEnd";
import Indentation from "./Indentation";
import InlineBlock from "./inlineBlock";

class Formatter {
  constructor() {
    this.globalTokens = [];
    this.indentation = new Indentation("\t\t");
    this.inlineBlock = new InlineBlock();
    this.params = new Params("");
    this.index = 0;
    this.previousReservedWord = {};
  }

  format = (tokens) => {
    console.log("inside formatter");
    this.globalTokens = [...tokens];
    const finalSQL = this.getFormattedSQL(tokens);
    return finalSQL;
  };

  getFormattedSQL(tokens) {
    let formattedQuery = "";

    tokens.forEach((token, index) => {
      this.index = index;

      if (token.type === tokenTypes.WHITESPACE) {
      } else if (token.type === tokenTypes.LINE_COMMENT) {
        formattedQuery = this.formatLineComment(token, formattedQuery);
      } else if (token.type === tokenTypes.BLOCK_COMMENT) {
        formattedQuery = this.formatBlockComment(token, formattedQuery);
      } else if (token.type === tokenTypes.RESERVED_TOPLEVEL) {
        formattedQuery = this.formatToplevelReservedWord(token, formattedQuery);
        this.previousReservedWord = token;
      } else if (token.type === tokenTypes.RESERVED_NEWLINE) {
        formattedQuery = this.formatNewlineReservedWord(token, formattedQuery);
        this.previousReservedWord = token;
      } else if (token.type === tokenTypes.RESERVED) {
        formattedQuery = this.formatWithSpaces(token, formattedQuery);
        this.previousReservedWord = token;
      } else if (token.type === tokenTypes.OPEN_PAREN) {
        formattedQuery = this.formatOpeningParentheses(token, formattedQuery);
      } else if (token.type === tokenTypes.CLOSE_PAREN) {
        formattedQuery = this.formatClosingParentheses(token, formattedQuery);
      } else if (token.type === tokenTypes.PLACEHOLDER) {
        formattedQuery = this.formatPlaceholder(token, formattedQuery);
      } else if (token.value === ",") {
        formattedQuery = this.formatComma(token, formattedQuery);
      } else if (token.value === ":") {
        formattedQuery = this.formatWithSpaceAfter(token, formattedQuery);
      } else if (token.value === ".") {
        formattedQuery = this.formatWithoutSpaces(token, formattedQuery);
      } else if (token.value === ";") {
        formattedQuery = this.formatQuerySeparator(token, formattedQuery);
      } else {
        formattedQuery = this.formatWithSpaces(token, formattedQuery);
      }
    });
    return formattedQuery;
  }

  formatLineComment(token, query) {
    return this.addNewline(query + token.value);
  }

  formatBlockComment(token, query) {
    return this.addNewline(
      this.addNewline(query) + this.indentComment(token.value)
    );
  }

  indentComment(comment) {
    return comment.replace(/\n/g, "\n" + this.indentation.getIndent());
  }

  formatToplevelReservedWord(token, query) {
    this.indentation.decreaseTopLevel();

    query = this.addNewline(query);

    this.indentation.increaseToplevel();

    query += this.equalizeWhitespace(token.value);
    return this.addNewline(query);
  }

  formatNewlineReservedWord(token, query) {
    return this.addNewline(query) + this.equalizeWhitespace(token.value) + " ";
  }

  equalizeWhitespace(string) {
    return string.replace(/\s+/g, " ");
  }
  formatOpeningParentheses(token, query) {
    const preserveWhitespaceFor = [
      tokenTypes.WHITESPACE,
      tokenTypes.OPEN_PAREN,
      tokenTypes.LINE_COMMENT,
    ];
    if (!includes(preserveWhitespaceFor, this.previousToken().type)) {
      query = trimEnd(query);
    }
    query += token.value;

    this.inlineBlock.beginIfPossible(this.globalTokens, this.index);

    if (!this.inlineBlock.isActive()) {
      this.indentation.increaseBlockLevel();
      query = this.addNewline(query);
    }
    return query;
  }

  formatClosingParentheses(token, query) {
    if (this.inlineBlock.isActive()) {
      this.inlineBlock.end();
      return this.formatWithSpaceAfter(token, query);
    } else {
      this.indentation.decreaseBlockLevel();
      return this.formatWithSpaces(token, this.addNewline(query));
    }
  }

  formatPlaceholder(token, query) {
    return query + this.params.get(token) + " ";
  }

  formatComma(token, query) {
    query = this.trimTrailingWhitespace(query) + token.value + " ";

    if (this.inlineBlock.isActive()) {
      return query;
    } else if (/^LIMIT$/i.test(this.previousReservedWord.value)) {
      return query;
    } else {
      return this.addNewline(query);
    }
  }

  formatWithSpaceAfter(token, query) {
    return this.trimTrailingWhitespace(query) + token.value + " ";
  }

  formatWithoutSpaces(token, query) {
    return this.trimTrailingWhitespace(query) + token.value;
  }

  formatWithSpaces(token, query) {
    return query + token.value + " ";
  }

  formatQuerySeparator(token, query) {
    return this.trimTrailingWhitespace(query) + token.value + "\n";
  }

  addNewline(query) {
    return trimEnd(query) + "\n" + this.indentation.getIndent();
  }

  trimTrailingWhitespace(query) {
    if (this.previousNonWhitespaceToken().type === tokenTypes.LINE_COMMENT) {
      return trimEnd(query) + "\n";
    } else {
      return trimEnd(query);
    }
  }

  previousNonWhitespaceToken() {
    let n = 1;
    while (this.previousToken(n).type === tokenTypes.WHITESPACE) {
      n++;
    }
    return this.previousToken(n);
  }

  previousToken(offset = 1) {
    return this.globalTokens[this.index - offset] || {};
  }
}

export default Formatter;
