const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let arr = [];
  let res = "";
  function CheckSpaces(x) {
    return x.trim() == '';
  }
  for (x of members) {

    if (typeof x === "string") {
      if (x===" ") {
        arr.push(" ")
      } else {

        arr.push((x.trim()).substring(0, 1).toUpperCase());
      }
    }

  }
  arr.sort();
  for (letter of arr) {
    res = res + letter;
  }
  return res;
}

module.exports = {
  createDreamTeam
};
