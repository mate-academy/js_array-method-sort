'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) > String(b) ? 1 : 0) {
    let temp = null;

    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (compareFunction(this[i], this[n]) > 0) {
          temp = this[i];
          this[i] = this[n];
          this[n] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
