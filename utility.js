const caseObj = require("./cases/main.cases");
const nextObj = require("./cases/nextLetter.cases");
const firstObj = require("./cases/firstLetter.cases");
const specialObj = require("./cases/specialLetter.cases");
const lastArr = require("./cases/lastLetter.cases");

let tools = {};

/**
 * Check if the loop on the first letter
 * I've added this function to make the code more readable
 * @param {number} index
 * @example
 * firstLetter(1) => false
 */
tools.firstLetter = index => !index;

/**
 * Change the first letter cases
 * @param {string} letter
 * @example
 * convertTheFirstLetters('و') => 'w'
 */
tools.convertTheFirstLetters = letter =>
  firstObj[letter] ? firstObj[letter] : tools.convertLetter(letter);

/**
 * Change the ordenary letters and convert them
 * @param {string} letter
 * @param {number} index
 * @example
 * convertLetter('م') => 'm'
 */
tools.convertLetter = (letter, index) =>
  caseObj[letter] ? caseObj[letter] : letter;

/**
 * Some Letters depends on the coming next one to add some extra letters in between
 * @param {string} letter
 * @param {string} nextLetter
 * @example
 * checkNextLetter('م', 'ح') => 'muh'
 */
tools.checkNextLetter = (letter, nextLetter) =>
  nextObj[letter] != undefined
    ? nextObj[letter][nextLetter]
      ? nextObj[letter][nextLetter]
      : ""
    : "";

/**
 * modify the whole word if there is a special cas
 * @param {string} enName
 * @param {string} letter
 * @param {string} nextLetter
 * @example
 * checkSpecialLetter('mar', 'و', 'ا') => 'Marwa'
 */
tools.checkSpecialLetter = (enName, letter, nextLetter) =>
  specialObj[letter] != undefined
    ? specialObj[letter][nextLetter]
      ? specialObj[letter]["action"] == "slice"
        ? enName.slice(0, -1) + specialObj[letter][nextLetter]
        : enName
      : enName
    : enName;

/**
 * Changing the last letter if necessary
 * @param {string} enName
 * @param {string} letter
 * @example
 * checkLastLetter('سارة', 'ة') => 'sarah'
 */
tools.checkLastLetter = (enName, letter) =>
  lastArr.includes(letter) ? enName.slice(0, -1) + "ah" : enName;

/**
 * Check if the letter was the last one in the word or not
 * @param {number} index
 * @param {string} arName
 * @example
 * isItLastLetter(4, 'حمدون') => false
 */
tools.isItLastLetter = (index, arName) => index == arName.length - 1;

/**
 * Return the En name with first letter as capital
 * @param {string} string
 * @example
 * capitalize('marwan') => 'Marwan'
 */
tools.capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = tools;
