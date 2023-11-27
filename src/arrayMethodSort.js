'use strict';

/**
 * Implement method Sort
 */
const compareStr = (a, b) => `${a}` > `${b}` ? 1 : -1;

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStr) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const tmp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
