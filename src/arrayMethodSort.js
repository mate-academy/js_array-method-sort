'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b) ? 1 : 0) {
    // write code here

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const val = this[i];

          this[i] = this[j];
          this[j] = val;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
