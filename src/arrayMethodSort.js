'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    let len = this.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          let temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }
    return this;
  };
}

module.exports = applyCustomSort;
