'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => ((a.toString() < b.toString()) ? -1 : 1);

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      let minValue = this[i];
      let indexOfBiggerValue = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(minValue, this[j]) > 0) {
          minValue = this[j];
          indexOfBiggerValue = j;
        }
      }

      this[indexOfBiggerValue] = this[i];
      this[i] = minValue;
    }

    return this;
  };
}

module.exports = applyCustomSort;
