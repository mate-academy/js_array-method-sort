'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction || function(a, b) {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    };

    for (let i = 0; i < this.length - 1; i++) {
      for (let q = 0; q < this.length - 1 - i; q++) {
        if (compare(this[q].toString(), this[q + 1].toString()) > 0) {
          [this[q], this[q + 1]] = [this[q + 1], this[q]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
