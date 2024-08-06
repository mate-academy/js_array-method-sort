'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const firstStr = String(a);
      const secondStr = String(b);

      if (firstStr < secondStr) {
        return -1;
      }

      if (firstStr > secondStr) {
        return 1;
      }

      return 0;
    };

    const compareFunc = compareFunction || defaultCompare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunc(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
