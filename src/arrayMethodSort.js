'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompareFunction = (a, b) => (String(a) > String(b) ? 1 : -1);
    const actualCompareFunction =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFunction;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (actualCompareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
