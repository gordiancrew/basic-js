const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  constructor() {
    this.arr = new Array();

  },

  getLength() {
    return arr.length;
  },
  addLink(value) {
    this.arr.push(value);
  },
  removeLink(position) {
    this.arr.splice(position,1);

  },
  reverseChain() {
    this.arr.reverse();
  },
  finishChain() {
    let res = "";
    for (let i = 0; i < this.arr.length; i++) {
      if (i === arr[arr.length - 1]) {
        res = res + "( " + arr[i] + " )";
      }
      else {
        res = res + "( " + arr[i] + " )~~";
      }

    }
    return res;
  }
};

module.exports = {
  chainMaker
};
