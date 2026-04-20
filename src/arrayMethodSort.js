'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareF = compareFunction || function(a, b) {
      const a1 = String(a);
      const b1 = String(b);

      if (a1 < b1) {
        return -1;
      }

      if (a1 > b1) {
        return 1;
      }

      return 0;
    };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareF(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
