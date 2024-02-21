'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return String(a) < String(b) ? -1 : 1;
  }) {
    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const current = this[j];

          this[j] = this[j + 1];
          this[j + 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
