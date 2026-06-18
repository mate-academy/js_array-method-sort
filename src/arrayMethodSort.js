'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (a.toString() > b.toString() ? 1 : -1),
  ) {
    let isSorted = true;
    const array = this;

    do {
      isSorted = true;

      for (let i = 1; i < array.length; i++) {
        const res = compareFunction(array[i - 1], array[i]);
        let temp;

        if (res > 0) {
          temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
          isSorted = false;
        }
      }
    } while (!isSorted);

    return array;
  };
}

module.exports = applyCustomSort;
