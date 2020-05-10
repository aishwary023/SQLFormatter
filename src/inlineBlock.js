import tokenTypes from "./tokenTypes";

const INLINE_MAX_LENGTH = 50;

export default class InlineBlock {
  constructor() {
    this.level = 0;
  }

  beginIfPossible(tokens, index) {
    if (this.level === 0 && this.isInlineBlock(tokens, index)) {
      this.level = 1;
    } else if (this.level > 0) {
      this.level++;
    } else {
      this.level = 0;
    }
  }

  end() {
    this.level--;
  }

  isActive() {
    return this.level > 0;
  }

  isInlineBlock(tokens, index) {
    let length = 0;
    let level = 0;

    for (let i = index; i < tokens.length; i++) {
      const token = tokens[i];
      length += token.value.length;

      if (length > INLINE_MAX_LENGTH) {
        return false;
      }

      if (token.type === tokenTypes.OPEN_PAREN) {
        level++;
      } else if (token.type === tokenTypes.CLOSE_PAREN) {
        level--;
        if (level === 0) {
          return true;
        }
      }

      if (this.isForbiddenToken(token)) {
        return false;
      }
    }
    return false;
  }

  isForbiddenToken({ type, value }) {
    return (
      type === tokenTypes.RESERVED_TOPLEVEL ||
      type === tokenTypes.RESERVED_NEWLINE ||
      type === tokenTypes.COMMENT ||
      type === tokenTypes.BLOCK_COMMENT ||
      value === ";"
    );
  }
}
