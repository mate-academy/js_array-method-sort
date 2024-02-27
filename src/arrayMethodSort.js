'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction) {
      for (let a = 0; a < this.length; a++) {
        for (let b = a + 1; b < this.length; b++) {
          if (compareFunction(this[a], this[b]) > 0) {
           [this[a], this[b]] = [this[b], this[a]]; //[b, a] a - b
          }
        }
      }

      return this;
    } else {
      for (let a = 0; a < this.length; a++) {
        for (let b = a + 1; b < this.length; b++) {
          if (String(this[a]) > String(this[b])) {
           [this[a], this[b]] = [this[b], this[a]]; //[b, a] a - b
          }
        }
      }

      return this;
    }
  };
}

module.exports = applyCustomSort;
