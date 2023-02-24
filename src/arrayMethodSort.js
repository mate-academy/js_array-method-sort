'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareAsStrings = (a, b) => {
      return String(a) > String(b);
    };

    const compare = compareFunction || compareAsStrings;
    let isSorted;

    do {
      isSorted = true;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compare(previousValue, currentValue) > 0) {
          isSorted = false;
          this[i - 1] = currentValue;
          this[i] = previousValue;
        }
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
