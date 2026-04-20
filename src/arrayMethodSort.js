'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const newCompareFunction =
      compareFunction || ((a, b) => (String(a) > String(b) ? 1 : -1));

    for (let i = 0; i < this.length - 1; i++) {
      for (let n = 0; n < this.length - 1 - i; n++) {
        if (newCompareFunction(this[n], this[n + 1]) > 0) {
          [this[n], this[n + 1]] = [this[n + 1], this[n]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
