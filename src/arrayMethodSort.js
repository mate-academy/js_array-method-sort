'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const localeCompareFunct = function (a, b) {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr > bStr) {
        return 1;
      }

      if (aStr < bStr) {
        return -1;
      }

      return 0;
    };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const choiseFunc = compareFunction || localeCompareFunct;

        if (choiseFunc(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
