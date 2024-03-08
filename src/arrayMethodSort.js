'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompareFunction = (a, b) => {
      return String(a) > String(b) ? 1 : -1;
    };

    const actualCompareFunction
      = typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFunction;

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && actualCompareFunction(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }
      this[j + 1] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
