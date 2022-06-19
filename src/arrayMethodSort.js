'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;
    let previousValue;
    let curentValue;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        previousValue = this[i - 1];
        curentValue = this[i];

        if (compareFunction(previousValue, curentValue) > 0) {
          this[i - 1] = curentValue;
          this[i] = previousValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
    // write code here
  };
}

module.exports = applyCustomSort;
