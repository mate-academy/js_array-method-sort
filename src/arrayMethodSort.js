'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const testString = (a, b) => {
    const firstString = String(a);
    const secondString = String(b);

    if (firstString > secondString) {
      return 1;
    }

    if (firstString < secondString) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = testString) {
    let count = 1; // 2

    while (count > 0) {
      const firstCountValue = count; // 1

      for (let i = 1; i < this.length; ++i) {
        const prevItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(prevItem, currentItem) > 0) {
          count++;
          this[i - 1] = currentItem;
          this[i] = prevItem;
        }
      }

      if (firstCountValue === count) {
        count = 0;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
