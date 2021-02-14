'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsString = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const value = this[i - 1];
        const currValue = this[i];

        if (compareFunction(value, currValue) > 0) {
          count++;
          this[i - 1] = currValue;
          this[i] = value;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
