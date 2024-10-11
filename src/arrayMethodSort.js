'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const comparator =
      compareFunction || ((a, b) => (String(a) > String(b) ? 1 : -1));

    const array = this;
    const length = array.length;

    // Einfacher Bubble Sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (comparator(array[j], array[j + 1]) > 0) {
          // Elemente vertauschen
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
