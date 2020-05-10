export default class Params {
  constructor(params) {
    this.params = params;
    this.index = 0;
  }
  get({ key, value }) {
    if (!this.params) {
      return value;
    }
    if (key) {
      return this.params[key];
    }
    return this.params[this.index++];
  }
}
