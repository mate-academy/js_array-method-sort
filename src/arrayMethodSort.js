'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2
  = function(compareFunction = (a, b) => a.toString() > b.toString() ? 1 : -1) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; i < this.length - i - 1; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            const temp = this[j];

            this[j] = this[i + 1];
            this[j - 1] = temp;
          }
        }
      }

      return this;
    };
}

module.exports = applyCustomSort;
