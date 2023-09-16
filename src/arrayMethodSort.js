'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => {
    const firstString = a.toString();
    const secondString = b.toString();

    if (firstString > secondString) {
      return 1;
    }

    if (firstString === secondString) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = currentValue;
          this[i] = previousValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
