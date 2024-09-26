'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultcompareFunction = (a, b) => {
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

    const comparator = compareFunction || defaultcompareFunction;

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && comparator(this[j], current) > 0) {
        this[j + 1] = this[j];
        j = j - 1;
      }

      this[j + 1] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
