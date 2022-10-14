const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};

  domains.forEach((value) => {
    const arrItem = value.split('.');
    let str = '';
    let check = '';

    for (let i = arrItem.length - 1; i >= 0; i -= 1) {
      str = str + `.${arrItem[i]}`;
      check = (i === 0) ? `${arrItem[i]}` + check : `.${arrItem[i]}` + check;
      result[str] = result[str] ? result[str] : 0;
      
      if (value.includes(check)) {
        result[str] = result[str] + 1;
      }
    }
  });

  return result;
}

module.exports = {
  getDNSStats
};
