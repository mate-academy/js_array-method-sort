'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (first, second) => {
    const stringF = first + '';
    const stringS = second + '';

    if (stringF > stringS) {
      return 1;
    } else if (stringF < stringS) {
      return -1;
    } else {
      return 0;
    }
  }) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstItem = this[i - 1];
        const secondItem = this[i];

        if (compareFunction(firstItem, secondItem) > 0) {
          count++;
          this[i - 1] = secondItem;
          this[i] = firstItem;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
