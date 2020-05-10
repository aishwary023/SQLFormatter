import repeat from "lodash/repeat";
import last from "lodash/last";

const INDENT_TYPE_TOP_LEVEL = "top-level";
const INDENT_TYPE_BLOCK_LEVEL = "block-level";

export default class Indentation {
  constructor(indent) {
    this.indent = indent;
    this.indentTypes = [];
  }

  getIndent() {
    return repeat(this.indent, this.indentTypes.length);
  }

  increaseToplevel() {
    this.indentTypes.push(INDENT_TYPE_TOP_LEVEL);
  }

  increaseBlockLevel() {
    this.indentTypes.push(INDENT_TYPE_BLOCK_LEVEL);
  }

  decreaseTopLevel() {
    if (last(this.indentTypes) === INDENT_TYPE_TOP_LEVEL) {
      this.indentTypes.pop();
    }
  }

  decreaseBlockLevel() {
    while (this.indentTypes.length > 0) {
      const type = this.indentTypes.pop();
      if (type !== INDENT_TYPE_TOP_LEVEL) {
        break;
      }
    }
  }
}
