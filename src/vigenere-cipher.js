const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(state) {
    this.state = state;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const lowerMessage = message.toLowerCase();
    const lowerKey = key.toLowerCase();
    let newKey = '';
    let space = {};
    let resultArr = [];
    const reg = new RegExp('^[a-zA-Z]+$');

    while (newKey.length < lowerMessage.length) {
      newKey += lowerKey;
    }

    for (let index = 0; index < lowerMessage.length; index += 1) {
      const pos = lowerMessage[index].charCodeAt(0) - 97;

      if (!reg.test(lowerMessage[index])) {
        space[index] = lowerMessage[index];
      } 
      
      if (pos < 0) {
        space[index] = lowerMessage[index];
      }
    }

    let newMessage = lowerMessage;

    for (let k in space) {
      newMessage = newMessage.split(space[k]).join('');
    }
     
    for (let index = 0; index < newMessage.length; index += 1) {
      const posLetterMessage = newMessage[index].charCodeAt(0) - 97;
      
      if (posLetterMessage >= 0) {
        const posLetterKey = newKey[index].charCodeAt(0) - 97;
        const newPos = (posLetterMessage + posLetterKey) % 26;

        resultArr.push(String.fromCharCode(newPos + 97));
      }
    }

    for (let k in space) {
      const del = resultArr.splice(Number(k));
      resultArr[Number(k)] = space[k];
      resultArr = resultArr.concat(del);
    }

    if (this.state === false) {
      resultArr.reverse();
    }

    return resultArr.join('').toUpperCase();
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const lowerMessage = message.toLowerCase();
    const lowerKey = key.toLowerCase();
    let newKey = '';
    let space = {};
    let resultArr = [];
    const reg = new RegExp('^[a-zA-Z]+$');

    while (newKey.length < message.length) {
      newKey += lowerKey;
    }

    for (let index = 0; index < lowerMessage.length; index += 1) {
      const pos = lowerMessage[index].charCodeAt(0) - 97;

      if (!reg.test(lowerMessage[index])) {
        space[index] = lowerMessage[index];
      } else if (pos < 0) {
        space[index] = lowerMessage[index];
      }
    }

    let newMessage = lowerMessage;

    for (let k in space) {
      newMessage = newMessage.split(space[k]).join('');
    }
    
    for (let index = 0; index < newMessage.length; index += 1) {
      const posLetterMessage = newMessage[index].charCodeAt(0) - 97;
    
      if (posLetterMessage >= 0) {
        const posLetterKey = newKey[index].charCodeAt(0) - 97;
        const newPos = (26 + (posLetterMessage - posLetterKey)) % 26;

        resultArr.push(String.fromCharCode(newPos + 97));
      }
    }

    for (let k in space) {
      const del = resultArr.splice(Number(k));
      resultArr[Number(k)] = space[k];
      resultArr = resultArr.concat(del);
    }

    if (this.state === false) {
      resultArr.reverse();
    } 

    return resultArr.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
