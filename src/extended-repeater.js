const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *     STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS
 */
function repeater(str, options) {
  let res = "";
  let repit=options.hasOwnProperty("repeatTimes")?options.repeatTimes: 1;
  let spr = options.hasOwnProperty("separator")? options.separator : "+";
  let addTime=options.hasOwnProperty("additionRepeatTimes")?options.additionRepeatTimes:1;
  let strAddition=options.hasOwnProperty("addition")?options.addition:"";
  let sepAddition=options.hasOwnProperty("additionSeparator")?options.additionSeparator:"|";
  for (let i = 0; i < repit; i++) {
    res = res + str;


   
      for (let t = 0; t < addTime; t++) {

        res = res + strAddition;
        if (t !== addTime - 1) {
          res = res + sepAddition;
        }
      }
   


    if (i !== repit - 1) {
      res = res + spr;
    }


  }
  return res;
}

module.exports = {
  repeater
};
