'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        // -i is
        // just optimization for bubble sort
        if (compareFunction === undefined) {
          const a = String(this[j]);
          const b = String(this[j + 1]);

          if (a > b) {
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
        } else {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
