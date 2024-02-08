'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return `${a}` > `${b}` ? 1 : 0;
  }) {
    for (let i = 0; i < this.length; i++) {
      for (let n = 0; n < this.length - 1 - i; n++) {
        if (compareFunction(this[n], this[n + 1]) > 0) {
          const temp = this[n];

          this[n] = this[n + 1];
          this[n + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
