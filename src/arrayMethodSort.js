'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSort = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previousValue, currentValue) > 0) {
          this[i] = previousValue;
          this[i - 1] = currentValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
