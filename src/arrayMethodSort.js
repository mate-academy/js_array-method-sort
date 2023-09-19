'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2
    = function(compareFunction = (a, b) => String(a) > String(b)) {
      for (let a = 0; a < this.length; a++) {
        for (let b = a + 1; b < this.length; b++) {
          if (compareFunction(this[a], this[b]) > 0) {
            const swapped = this[a];

            this[a] = this[b];
            this[b] = swapped;
          }
        }
      }

      return this;
    };
};

module.exports = applyCustomSort;
