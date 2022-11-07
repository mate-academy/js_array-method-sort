'use strict';

/**
 * Implement method Sort
 */
const compareAsStr = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  switch (stringA > stringB) {
    case true: return 1;
    case false: return -1;
    default: return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStr) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
