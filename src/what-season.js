const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let seasons = ["spring", "summer", "autumn", "winter"];

  if (!date) return "Unable to determine the time of year!";
  if (!Date.parse(date) || Object.getOwnPropertySymbols(date).length > 0)
    throw new Error("Invalid date!");

  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return seasons[3];
    case 2:
    case 3:
    case 4:
      return seasons[0];
    case 5:
    case 6:
    case 7:
      return seasons[1];
    case 8:
    case 9:
    case 10:
      return seasons[2];
  }
}

module.exports = {
  getSeason,
};
