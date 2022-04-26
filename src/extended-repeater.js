const { NotImplementedError } = require("../extensions/index.js");

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
 *
 */
function repeater(str, options) {
  let result = "";
  let subResult = "";
  let string = String(str);
  let subString = "";
  let finalString;
  let optionalStr;

  const connector = options.separator ? options.separator : "+";
  const additionalConnector = options.additionSeparator
    ? options.additionSeparator
    : "|";

  if (
    (options.addition ||
      options.addition === false ||
      options.addition === null) &&
    options.additionRepeatTimes > 1
  ) {
    String(options.addition);
    optionalStr = options.addition;
    subString += optionalStr + additionalConnector;
  } else if (
    options.addition ||
    options.addition === false ||
    options.addition === null
  ) {
    String(options.addition);
    optionalStr = options.addition;
    subString += optionalStr;
  }

  if (
    (options.addition ||
      options.addition === false ||
      options.addition === null) &&
    options.additionRepeatTimes
  ) {
    subResult +=
      subString.repeat(options.additionRepeatTimes - 1) + optionalStr;
  } else if (
    options.addition ||
    options.addition === false ||
    options.addition === null
  ) {
    subResult += optionalStr;
  }

  finalString = string + subResult + connector;
  result += finalString.repeat(options.repeatTimes - 1) + string + subResult;
  return result;
}

module.exports = {
  repeater,
};
