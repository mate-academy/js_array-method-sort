'use strict';

/**
 * Implement method Sort
 */
function compareAsString(valueA, valueB) {
  const stringA = String(valueA);
  const stringB = String(valueB);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let swapCount;

    do {
      swapCount = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          swapCount++;
        }
      }
    } while (swapCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
