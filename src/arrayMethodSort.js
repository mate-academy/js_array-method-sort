'use strict';

/**
 * Implement method Sort
 */
const defaultComparing = (a, b) => {
  return String(a) < String(b) ? -1 : 1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultComparing) {
    for (let i = 1; i < this.length; i++) {
      for (let k = i; k && compareFunction(this[k - 1], this[k]) > 0; k--) {
        [this[k], this[k - 1]] = [this[k - 1], this[k]];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
