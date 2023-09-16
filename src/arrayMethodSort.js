'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => a.toString() > b.toString()) {
    for (let a = 0; a < this.length; a++) {
      for (let i = a + 1; i < this.length; i++) {
        if (compareFunction(this[a], this[i]) > 0) {
          const item = this[a];

          this[a] = this[i];
          this[i] = item;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
