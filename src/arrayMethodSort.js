'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b)) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const currentValue = this[j];

        if (compareFunction(this[i], currentValue) > 0) {
          this[j] = this[i];
          this[i] = currentValue;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
