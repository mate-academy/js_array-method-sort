'use strict';

/**
 * Implement method Sort
 */

const CompareAsString = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = CompareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prevValue, currentValue) > 0) {
          count++;
          this[i - 1] = currentValue;
          this[i] = prevValue;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
