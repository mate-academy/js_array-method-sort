'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    }

    if (stringA === stringB) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previusValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(previusValue, currentValue) > 0) {
          count++;
          this[i - 1] = currentValue;
          this[i] = previusValue;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
