'use strict';

/**
 * Implement method Sort
 */

const compareString = (a, b) => {
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
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let itterationCount;

    do {
      itterationCount = 0;

      for (let i = 1; i < this.length; i++) {
        const firstValue = this[i - 1];
        const secondValue = this[i];

        if (compareFunction(firstValue, secondValue) > 0) {
          this[i - 1] = secondValue;
          this[i] = firstValue;
          itterationCount++;
        }
      }
    } while (itterationCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
