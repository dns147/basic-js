const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  getLength() {
    return this.chain.match(/\w+/g).length;
  },
  addLink(value) {
    if (!this.chain) {
			this.chain = this.chain + '( ' + value + ' )';
		} else {
			this.chain = this.chain + '~~' + '( ' + value + ' )';
		}

		return this;
  },
  removeLink(position) {
    const arr = this.chain.split('~~');

		if (!position || !(typeof position === 'number') || position < 0 || position + 1 > arr.length) {
			this.chain = '';
			throw new Error("You can\'t remove incorrect link!");
		} else {			
			arr.splice(position - 1, 1);
			this.chain = arr.join('~~');
			return this;
		}
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
		return this;
  },
  finishChain() {
    const res = this.chain;
		this.chain = '';
		return res;
  }
};

module.exports = {
  chainMaker
};
