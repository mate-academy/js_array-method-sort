'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let comparator = compareFunction;
    const defaultCompare = (a, b) => {
      return String(a) > String(b);
    };

    if (!compareFunction) {
      comparator = defaultCompare;
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
