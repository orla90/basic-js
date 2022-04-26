const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let result = [],
    count,
    newRow;

  for (let row = 0; row < matrix.length; row++) {
    newRow = [];
    for (let col = 0; col < matrix[row].length; col++) {
      count = 0;
      if (row) {
        if (col && matrix[row - 1][col - 1]) count++;
        if (col !== matrix[row].length - 1 && matrix[row - 1][col + 1]) count++;
        if (matrix[row - 1][col]) count++;
      }
      if (row !== matrix.length - 1) {
        if (col && matrix[row + 1][col - 1]) count++;
        if (col !== matrix[row].length - 1 && matrix[row + 1][col + 1]) count++;
        if (matrix[row + 1][col]) count++;
      }
      if (col && matrix[row][col - 1]) count++;
      if (col !== matrix[row].length - 1 && matrix[row][col + 1]) count++;
      newRow.push(count);
    }
    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper,
};
