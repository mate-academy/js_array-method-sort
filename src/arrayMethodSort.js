'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const sort = this[j];

          this[j] = this[j + 1];
          this[j + 1] = sort;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
