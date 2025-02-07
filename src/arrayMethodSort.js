'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFunction = (a, b) => {
      const A = String(a);
      const B = String(b);

      if (A === B) {
        return 0;
      }

      return A < B ? -1 : 1;
    };

    const comparator =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFunction;

    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
