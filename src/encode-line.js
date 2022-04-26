const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
// function encodeLine(/* str */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function encodeLine(str) {
  let letter = str[0],
    letterCount = 1,
    arr = [];
    result = [];

  for (let i = 1; i < str.length; i++) {
    let nextLetter = str[i];
    if (letter === nextLetter) {
      letterCount++;
    } else {
      if (letterCount > 1) {
        arr.push(letterCount);
      }

      arr.push(letter);
      letter = nextLetter;
      letterCount = 1;
    }
  }
  if (letterCount > 1) {
    arr.push(letterCount);
  }

  arr.push(letter);
  for (let i = 0; i < arr.length; i += 2) {
    result.push(Array.from(arr.slice(i, i + 2)));
  }
  return result.flat().join("");
}

module.exports = {
  encodeLine,
};
