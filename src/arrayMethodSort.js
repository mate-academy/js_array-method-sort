'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (elem1, elem2) =>
      String(elem1) > String(elem2) ? 1 : -1,
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const first = this[j];

          this[j] = this[j + 1];
          this[j + 1] = first;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
