'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  const compareAsString = (a, b) => {
    const stringA = a.toString();
    const stringB = b.toString();

    if (stringA > stringB) {
      return 1;
    }

    if (stringA < stringB) {
      return -1;
    }

    if (stringA === stringB) {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const curentValue = this[i];

        if (compareFunction(previousValue, curentValue) > 0) {
          this[i - 1] = curentValue;
          this[i] = previousValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
