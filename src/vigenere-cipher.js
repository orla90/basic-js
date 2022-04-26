const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const tabulaRecta = [];
let newRow = [];

for (let i = 0; i < alphabet.length; i++) {
  newRow.push(alphabet.slice(i).split(""));
  tabulaRecta.push(newRow);
  newRow = [];
}

for (let i = 0; i < tabulaRecta.length; i++) {
  tabulaRecta[i].push(alphabet.slice(0, i).split(""));
}

for (let i = 0; i < tabulaRecta.length; i++) {
  tabulaRecta[i] = [...tabulaRecta[i][0], ...tabulaRecta[i][1]].join("");
}

class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    let str = "";
    let encryptStr = "";
    let encryptKeyX;
    let encryptKeyY;
    let indexArr = [];

    for (let i = 0; i < message.length; i++) {
      if (message[i] === " ") {
        indexArr.push(i);
      }
      if (message[i] !== " ") {
        str += message[i].toUpperCase();
      }
    }

    const messageNum = Math.ceil(message.length / key.length);
    key = key.toUpperCase().repeat(messageNum);

    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        encryptKeyX = tabulaRecta[0].indexOf(`${key[i]}`);
        encryptKeyY = tabulaRecta[0].indexOf(`${str[i]}`);
        encryptStr += tabulaRecta[encryptKeyX][encryptKeyY];
      } else {
        encryptStr += str[i];
      }
    }

    encryptStr = [...encryptStr];
    for (let i = 0; i < indexArr.length; i++) {
      encryptStr.splice(indexArr[i], 0, " ");
    }

    if (!this.directMachine) encryptStr = encryptStr.reverse();
    return encryptStr.join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    let str = "";
    let decryptStr = "";
    let decryptKeyX;
    let decryptKeyY;
    let indexArr = [];

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === " ") {
        indexArr.push(i);
      }
      if (encryptedMessage[i] !== " ") {
        str += encryptedMessage[i];
      }
    }

    const messageNum = Math.ceil(encryptedMessage.length / key.length);
    key = key.repeat(messageNum).toUpperCase();

    for (let i = 0; i < str.length; i++) {
      if (alphabet.includes(str[i])) {
        decryptKeyX = tabulaRecta[0].indexOf(`${key[i]}`);
        decryptKeyY = tabulaRecta[decryptKeyX].indexOf(`${str[i]}`);
        decryptStr += tabulaRecta[0][decryptKeyY];
      } else {
        decryptStr += str[i];
      }
    }

    decryptStr = [...decryptStr];
    for (let i = 0; i < indexArr.length; i++) {
      decryptStr.splice(indexArr[i], 0, " ");
    }

    if (!this.directMachine) decryptStr = decryptStr.reverse();
    return decryptStr.join("");
  }
}

const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
directMachine.encrypt("attack at dawn!", "alphonse");
directMachine.decrypt("AEIHQX SX DLLU!", "alphonse");

module.exports = {
  VigenereCipheringMachine,
};
