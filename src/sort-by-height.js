const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let copyArr = arr.slice();
  let index = 0;
  const newArr = arr.filter((v) => v > 0);
  
  newArr.sort((a, b) => a - b);

  copyArr.forEach((v, i) => {
    if (v !== -1) {
      copyArr[i] = newArr[index];
      index += 1;
    }
  });

  return copyArr;
}

module.exports = {
  sortByHeight
};
