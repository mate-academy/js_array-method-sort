'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultComparator = (a, b) => {
      if (a === b) {
        return 0;
      }

      if (a === undefined) {
        return 1;
      }

      if (b === undefined) {
        return -1;
      }

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

    const comparator =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultComparator;

    let len = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < len - 1; i++) {
        if (comparator(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          swapped = true;
        }
      }
      len--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
