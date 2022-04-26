const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (value === null) {
      this.chain.push("null");
    } else {
      this.chain.push(value);
    }

    return this;
  },

  removeLink(position) {
    if (
      typeof position != "number" ||
      position <= 0 ||
      this.chain.length < position
    ) {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = [];
    for (i = 0; i < this.chain.length; i++) {
      result.push(this.chain[i]);
    }
    this.chain.length = 0;
    result = result.join(" )~~( ");
    return `( ${result} )`;
  },
};

module.exports = {
  chainMaker,
};
