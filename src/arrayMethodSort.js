'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const sortMethod = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    return (stringA > stringB) ? 1
      : (stringA === stringB) ? 0
        : -1;
  };

  [].__proto__.sort2 = function(compareFunction = sortMethod) {
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
