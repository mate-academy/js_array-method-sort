'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (firstItem, secondItem) => {
      const firstItemStr = '' + firstItem;
      const secondItemStr = '' + secondItem;

      if (firstItemStr > secondItemStr) {
        return 1;
      } else if ((firstItemStr < secondItemStr)) {
        return -1;
      }

      return 0;
    }) {
    // write code here

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstItem = this[i - 1];
        const secondItem = this[i];

        if (compareFunction(firstItem, secondItem) > 0) {
          this[i] = firstItem;
          this[i - 1] = secondItem;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
