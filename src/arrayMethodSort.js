'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    function swap(array, i, j) {
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }

    function compare(a, b) {
      if (compareFunction) {
        return compareFunction(a, b);
      } else {
        if (!compareFunction) {
          return -1;
        }

        if (compareFunction) {
          return 1;
        }

        return 0;
      }
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          swap(this, j, j + 1);
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
