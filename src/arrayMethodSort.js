'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => a.toString() > b.toString()) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const value1 = this[j];
        const value2 = this[j + 1];

        if (compareFunction(value1, value2) > 0) {
          const currValue = this[j];

          this[j] = this[j + 1];
          this[j + 1] = currValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
