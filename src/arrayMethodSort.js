'use strict';

/**
 * Implement method Sort
 */
function defaultCompare(a, b) {
  return String(a) > String(b) ? 1 : -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length - i; j++) {
        if (compareFunction(this[j - 1], this[j]) > 0) {
          const item = this[j - 1];

          this[j - 1] = this[j];
          this[j] = item;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
