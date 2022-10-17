const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor() {
    if (arguments[0] === false) {
      this.arg = false;
    } else {
      this.arg = true;
    }
  }






encrypt() {

  if (arguments.length !== 2 || arguments[0] === undefined || arguments[1] === undefined) {
    throw new Error("Incorrect arguments!");
  }
  let arrEnterLetters = arguments[0].split("");
  let arrCodeWord = arguments[1].split("");
  let arrCodeWordLength = [];
  let arrNumbersResult = [];
  let arrCharResult = [];

  let codeWordLength = arrCodeWord.length;
  for (let i = 0; i < arrEnterLetters.length; i++) {
    arrCodeWordLength.push(arrCodeWord[i < codeWordLength ? i : i % codeWordLength].toUpperCase());
  }

  let cryptGapCount = 0;
  for (let t = 0; t < arrEnterLetters.length; t++) {
    let parseNumber;

    if ((arrEnterLetters[t].toUpperCase().charCodeAt(0) >= 65) && (arrEnterLetters[t].toUpperCase().charCodeAt(0) <= 90)) {
      parseNumber = arrEnterLetters[t].toUpperCase().charCodeAt(0) + (arrCodeWordLength[cryptGapCount++].charCodeAt(0) - 65);
      parseNumber = parseNumber <= 90 ? parseNumber : (64 + (parseNumber - 90));

    } else {
      parseNumber = arrEnterLetters[t];
    }
    arrNumbersResult.push(parseNumber);
  }

  for (let y = 0; y < arrEnterLetters.length; y++) {
    if (typeof arrNumbersResult[y] !== "number") {
      arrCharResult.push(arrNumbersResult[y]);
    } else {
      let charRes = String.fromCharCode(arrNumbersResult[y]);
      arrCharResult.push(charRes);
    }
  }
  if(this.arg==true){
  return arrCharResult.join("");
  }else{

    arrCharResult.reverse();
    return arrCharResult.join("");
  }
}
decrypt() {
  if (arguments.length !== 2 || arguments[0] === undefined || arguments[1] === undefined) {
    throw new Error("Incorrect arguments!");
  }
  let arrEnterLetters = arguments[0].split("");
  let arrCodeWord = arguments[1].split("");
  let arrCodeWordLength = [];
  let arrNumbersResult = [];
  let arrCharResult = [];

  let codeWordLength = arrCodeWord.length;
  for (let i = 0; i < arrEnterLetters.length; i++) {
    arrCodeWordLength.push(arrCodeWord[i < codeWordLength ? i : i % codeWordLength].toUpperCase());
  }

  let cryptGapCount = 0;
  for (let t = 0; t < arrEnterLetters.length; t++) {
    let parseNumber;

    if ((arrEnterLetters[t].toUpperCase().charCodeAt(0) >= 65) && (arrEnterLetters[t].toUpperCase().charCodeAt(0) <= 90)) {
      parseNumber = arrEnterLetters[t].toUpperCase().charCodeAt(0) - (arrCodeWordLength[cryptGapCount++].charCodeAt(0) - 65);
      parseNumber = parseNumber >= 65 ? parseNumber : (90 - (64 - parseNumber));




    } else {
      parseNumber = arrEnterLetters[t];
    }
    arrNumbersResult.push(parseNumber);
  }

  for (let y = 0; y < arrEnterLetters.length; y++) {
    if (typeof arrNumbersResult[y] !== "number") {
      arrCharResult.push(arrNumbersResult[y]);
    } else {
      let charRes = String.fromCharCode(arrNumbersResult[y]);
      arrCharResult.push(charRes);
    }
  }
  if(this.arg==true){
    return arrCharResult.join("");
    }else{
  
      arrCharResult.reverse();
      return arrCharResult.join("");
    }
}
}

module.exports = {
  VigenereCipheringMachine
};
