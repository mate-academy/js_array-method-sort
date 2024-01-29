'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => (
    String(a) > String(b))) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const current = this[j];
        const next = this[j + 1];

        if (compareFunction(current, next) > 0) {
          this[j] = next;
          this[j + 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
