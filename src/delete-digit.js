const { NotImplementedError } = require('../extensions/index.js');

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
  const arr = String(n).split('')
  let resultArr = [];
  let resultStr = [];

  for (let i = 0; i < arr.length; i += 1) {
    const copyArr = arr.slice(0);
    copyArr.splice(i, 1);
    resultArr.push(copyArr);
  }

  resultArr.forEach((value) => {
    resultStr.push(value.join(''));
  });

  return Math.max(...resultStr);
}

module.exports = {
  deleteDigit
};
