'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultStringCompare) {
    let sortCounter;

    do {
      sortCounter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          sortCounter++;
          this[i - 1] = currentValue;
          this[i] = previousValue;
        }
      }
    } while (sortCounter > 0);

    return this;
  };
}

const defaultStringCompare = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  }

  return -1;
};

module.exports = applyCustomSort;
