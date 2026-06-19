'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = ((a, b) =>
      a.toString() > b.toString() ? 1 : -1)) {
    for (let i = 0; i < this.length; i++) {
      for (let k = 0; k < this.length - 1; k++) {
        if (compareFunction(this[k], this[k + 1]) > 0) {
          const tmp = this[k];
          this[k] = this[k + 1];
          this[k + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
