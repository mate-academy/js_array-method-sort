'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareFunction = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstValue = this[i - 1];
        const secondValue = this[i];

        if (compareFunction(firstValue, secondValue) > 0) {
          this[i] = firstValue;
          this[i - 1] = secondValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
