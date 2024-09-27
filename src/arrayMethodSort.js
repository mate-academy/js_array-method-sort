'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) > String(b) ? 1 : 0) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const tempVar = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tempVar;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
