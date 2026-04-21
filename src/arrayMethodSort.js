'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let s = i + 1; s < this.length; s++) {
        if (compareFunction(this[i], this[s]) > 0) {
          const result = this[i];

          this[i] = this[s];
          this[s] = result;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
