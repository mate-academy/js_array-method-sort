'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (
      typeof compareFunction !== 'function' &&
      compareFunction !== undefined
    ) {
      return;
    }

    const array = this;
    const length = array.length;

    const defaultCompare = (a, b) => {
      const aString = String(a);
      const bString = String(b);

      return aString > bString ? 1 : aString < bString ? -1 : 0;
    };

    const comparator = compareFunction || defaultCompare;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (comparator(array[j], array[j + 1]) > 0) {
          const temp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
