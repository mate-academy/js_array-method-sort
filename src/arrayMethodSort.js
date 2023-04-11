'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => String(a) < String(b) ? -1 : 1;

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[j], this[i]) < 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
