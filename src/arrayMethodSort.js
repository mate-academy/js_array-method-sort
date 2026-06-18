'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) =>
            String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;

    const array = this;
    let len = array.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        if (compare(array[i], array[i + 1]) > 0) {
          const temp = array[i];

          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
      len--;
    } while (swapped);

    return array;
  };
}

module.exports = applyCustomSort;
