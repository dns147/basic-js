const { NotImplementedError } = require('../extensions/index.js');

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
  let copyMatrix = [];

  for (let row = 0; row < matrix.length; row++) {
    copyMatrix.push(matrix[row].slice());
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      let count = 0;

      if (row > 0) {
        if (matrix[row - 1][col]) {
          count += 1;
        }

        if (matrix[row - 1][col + 1]) {
          count += 1;
        }

        if (matrix[row - 1][col - 1]) {
          count += 1;
        }
      }

      if (row < matrix.length - 1) {
        if (matrix[row + 1][col]) {
          count += 1;
        }

        if (matrix[row + 1][col + 1]) {
          count += 1;
        }

        if (matrix[row + 1][col - 1]) {
          count += 1;
        }
      }

      if (matrix[row][col + 1]) {
        count += 1;
      }

      if (matrix[row][col - 1]) {
        count += 1;
      }

      copyMatrix[row][col] = count;
    }
  }

  return copyMatrix;
}

module.exports = {
  minesweeper
};
