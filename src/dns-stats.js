const { NotImplementedError } = require("../extensions/index.js");

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
  let domainStr = "",
    domain = "",
    subdomains,
    result = {};
  for (let i = 0; i < domains.length; i++) {
    subdomains = domains[i].split(".");
    for (let j = subdomains.length - 1; j >= 0; j--) {
      domainStr = `.${subdomains[j]}`;
      domain += domainStr;
      result[domain] = !result[domain] ? 1 : result[domain] + 1;
    }
    domainStr = "";
    domain = "";
  }
  return result;
}

module.exports = {
  getDNSStats,
};
