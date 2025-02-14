'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    const array = Object(this);
    const len = array.length >>> 0;

    if (len <= 1) {
      return array;
    }

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

      const aString = String(a);
      const bString = String(b);

      if (aString < bString) {
        return -1;
      }

      if (aString > bString) {
        return 1;
      }

      return 0;
    };

    const actualCompare = compareFunction || defaultCompare;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (actualCompare(array[j], array[j + 1]) > 0) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
