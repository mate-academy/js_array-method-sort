'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction || function(a, b) {
      const item1 = a.toString();
      const item2 = b.toString();

      if (item1 < item2) {
        return -1;
      }

      if (item1 > item2) {
        return 1;
      }

      return 0;
    };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
