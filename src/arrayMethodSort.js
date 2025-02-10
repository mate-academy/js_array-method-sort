'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Default compare function: compares elements as strings in ascending order
    const compare =
      compareFunction ||
      ((a, b) => {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      });

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && compare(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }
      this[j + 1] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
