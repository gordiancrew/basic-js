const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let localDeep = 1;
    let currentDeep = 1;
    for (let x of arr) {
      if (Array.isArray(x)) {
        
        currentDeep = this.calculateDepth(x) + 1;
      }
      if (currentDeep > localDeep) {
        localDeep = currentDeep;
      }

    }
    return localDeep;
  }
}


module.exports = {
  DepthCalculator
};
