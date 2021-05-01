'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction
  = (firstEl, secondEl) => String(firstEl) > String(secondEl)) {
    let continueSorting;

    do {
      continueSorting = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          continueSorting = true;
        }
      }
    } while (continueSorting);

    return this;
  };
}

module.exports = applyCustomSort;
