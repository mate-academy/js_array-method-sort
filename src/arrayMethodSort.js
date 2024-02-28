'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFn) {
    let isSorted;

    if (compareFunction !== undefined) {
      while (!isSorted) {
        isSorted = true;

        for (let i = 1; i < this.length; i++) {
          const previousValue = this[i - 1];
          const currentValue = this[i];

          if (compareFunction(previousValue, currentValue) > 0) {
            this[i] = previousValue;
            this[i - 1] = currentValue;
            isSorted = false;
          }
        }
      }

      return this;
    }

    return this;
  };
}

function defaultCompareFn(value1, value2) {
  return value1.toString() > value2.toString();
}

module.exports = applyCustomSort;
