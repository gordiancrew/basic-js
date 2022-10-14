const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
    
  arr:new Array(),

  getLength() {
    return arr.length;
  },
  addLink(value) {
  
    this.arr.push(value);
    return this;
  },
  removeLink(position) {

    if(typeof position !="number"||position>this.arr.length||position<1){
      this.arr=new Array();
     throw new Error( 'You can\'t remove incorrect link!');
    
      
    }
    this.arr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = "";
    for (let i = 0; i < this.arr.length; i++) {
      if (i === this.arr.length - 1) {
        res = res + "( " + this.arr[i] + " )";
      }
      else {
        res = res + "( " + this.arr[i] + " )~~";
      }

    }
   this.arr=new Array();
    return res;
  }
};

module.exports = {
  chainMaker
};
