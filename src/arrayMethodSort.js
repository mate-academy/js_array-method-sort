'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here
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

const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
