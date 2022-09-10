'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstItem = this[i - 1];
        const secondItem = this[i];

        if (compareFunction(firstItem, secondItem) > 0) {
          this[i - 1] = secondItem;
          this[i] = firstItem;
          count++;
        }
      }
    } while (count);

    return this;
  };
}

function defaultCompare(firstItem, secondItem) {
  const firstItemAsStr = String(firstItem);
  const secondItemAsStr = String(secondItem);

  if (firstItemAsStr > secondItemAsStr) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
