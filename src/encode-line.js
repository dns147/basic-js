const { NotImplementedError } = require('../extensions/index.js');

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
function encodeLine(str) {
  let arr = str.split('');
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i + 1]) {
      const index = arr.indexOf(arr[i]);
      const count = i + 1 - index;

      if (count > 1) {
        result.push(count, str[i]);
      } else {
        result.push(str[i]);
      }

      arr[index] = ' ';
    } 
  }
  
  return `${result.join('')}`;
}

module.exports = {
  encodeLine
};
