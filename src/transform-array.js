const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let copyArr = arr.slice(0);

  for (let i = 0; i < arr.length; i++) {
    if (copyArr[i] === "--discard-next") {
      copyArr.splice(i + 1, 1);
    }
    if (copyArr[i] === "--discard-prev" && i != 0) {
      copyArr.splice(i - 1, 1);
    }

    if (copyArr[i] === "--double-next" && i != copyArr.length - 1) {
      copyArr.splice(i, 0, copyArr[i + 1]);
      i = i + 1;
    }

    if (copyArr[i] === "--double-prev" && i != 0) {
      copyArr.splice(i, 0, copyArr[i - 1]);
      i = i + 1;
    }
  }
  
  for (let i = copyArr.length - 1; i >= 0; i--) {
    if (
      copyArr[i].toString().startsWith("--discard") ||
      copyArr[i].toString().startsWith("--double")
    )
      copyArr.splice(i, 1);
  }

  return copyArr;
}

module.exports = {
  transform,
};
