'use strict';

/**
 * Implement method Sort
 */

const asString = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = asString) {
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
