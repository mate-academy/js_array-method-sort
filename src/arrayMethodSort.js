'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompare = (a, b) => {
      const first = a.toString();
      const second = b.toString();

      return first > second ? 1 : (first < second ? -1 : 0);
    };

    const compare = compareFunction || defaultCompare;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < (this.length - i - 1); j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
