const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = [];

  const isIterable = (members) => {
    return Symbol.iterator in Object(members);
  };

  if (!isIterable(members)) return false;

  for (let member of members) {
    if (typeof member === "string") {
      teamName.push(member.trim().toUpperCase().slice(0, 1));
    }
  }

  return teamName.sort().join("");
}

createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]);

module.exports = {
  createDreamTeam,
};
