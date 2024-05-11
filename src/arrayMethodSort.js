'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      for (let index = i + 1; index < this.length; index++) {
        if (compareFunction(this[i], this[index]) > 0) {
          const value = this[i];

          this[i] = this[index];
          this[index] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
