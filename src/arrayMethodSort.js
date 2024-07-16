'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA < strB) {
        return -1;
      }

      if (strA > strB) {
        return 1;
      }

      return 0;
    };

    const compare = compareFunction || defaultCompare;

    const array = this.slice();
    const len = array.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (compare(array[j], array[j + 1]) > 0) {
          const temp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    for (let i = 0; i < len; i++) {
      this[i] = array[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
