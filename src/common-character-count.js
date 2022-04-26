const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let sArr1 = [...s1].sort();
  let sArr2 = [...s2].sort();

  for (let i = sArr1.length - 1; i >= 0 ; i--) {
    for (let j = sArr2.length - 2; j >=0; j--) {
      if (sArr1[i] === sArr2[j]) {
        sArr1.splice(i, 1);
        sArr2.splice(j, 1);
        count ++;
      }
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
