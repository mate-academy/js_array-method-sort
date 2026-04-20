'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;
    const defaultCompare = (a, b) => {
      if (a === undefined && b === undefined) {
        return 0;
      }

      if (a === undefined) {
        return 1;
      }

      if (b === undefined) {
        return -1;
      }

      const aStr = String(a);
      const bStr = String(b);

      if (aStr > bStr) {
        return 1;
      }

      if (aStr < bStr) {
        return -1;
      }

      return 0;
    };

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        const cmp = compareFunction
          ? compareFunction(array[j], array[j + 1])
          : defaultCompare(array[j], array[j + 1]);
        const swap = cmp > 0;

        if (swap) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
