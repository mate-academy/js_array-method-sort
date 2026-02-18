'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const A = String(a);
      const B = String(b);

      if (A < B) {
        return -1;
      }

      if (A > B) {
        return 1;
      }

      return 0;
    };

    const cmp =
      typeof compareFunction === 'function' ? compareFunction : defaultCompare;

    for (let i = 1; i < this.length; i++) {
      const key = this[i];
      let j = i - 1;

      while (j >= 0 && cmp(this[j], key) > 0) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = key;
    }

    return this;
  };
}

module.exports = applyCustomSort;
