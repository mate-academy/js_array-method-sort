'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (x, y) => (String(x) < String(y)) ? -1 : 1
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const smaller = this[i];

          this[i] = this[j];
          this[j] = smaller;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
