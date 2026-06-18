'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const n = this.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
        if (compareFunction) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
        } else {
          if (String(this[j]) > String(this[j + 1])) {
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
