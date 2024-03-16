'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    const arr = this.slice();

    function swap(array, i, j) {
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }

    function compare(a, b) {
      if (compareFunction) {
        return compareFunction(a, b);
      } else {
        if (String(a) < String(b)) {
          return -1;
        }

        if (compareFunction) {
          return 1;
        }

        return 0;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          swap(arr, j, j + 1);
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
      this[i] = arr[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
