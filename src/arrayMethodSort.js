'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction
  = (a, b) => String(a) > String(b)) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const next = this[i];
        const prev = this[j];

        if (compareFunction(this[i], this[j]) > 0) {
          this[i] = prev;
          this[j] = next;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
