const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nArr = [...n.toString()];
  let max = parseInt(nArr.slice(1).join(""));

  for (let i = 1; i < nArr.length; i++) {
    let possibleMax = parseInt(
      [nArr.slice(0, i), nArr.slice(i + 1)].flat().join("")
    );
    if (possibleMax > max) max = possibleMax;
  }

  return max;
}

module.exports = {
  deleteDigit,
};
