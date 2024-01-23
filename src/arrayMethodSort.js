'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareFunctionForStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    };

    if (stringA === stringB) {
      return 0;
    };

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareFunctionForStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const currentTemporaryValue = this[i];

          this[i] = this[i - 1];
          this[i - 1] = currentTemporaryValue;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
