const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let k;

  if(!typeof sampleActivity==true|| sampleActivity<1||sampleActivity>15)
  return false;
  if (sampleActivity > 8) {
    k = 1;
  } else if (sampleActivity > 3) {
    k = 2;
  }
  else if (sampleActivity > 2) {
    k = 3;
  } else {
    k = 4;
  }

  return HALF_LIFE_PERIOD * k;


}

module.exports = {
  dateSample
};
