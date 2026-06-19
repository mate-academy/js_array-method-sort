'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => {
    return String(a) > String(b);
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
