'use strict';

/**
 * Implement method Sort
 */

function compareByString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringB > stringA) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareByString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          count++;
          this[i - 1] = currentValue;
          this[i] = previousValue;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
