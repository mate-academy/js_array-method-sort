'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    const result = String(a) < String(b) ? -1 : 1;

    return result;
  }) {
    let isSorted = false;
    let buffer;

    while (!isSorted) {
      isSorted = true;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          buffer = this[i + 1];
          this[i + 1] = this[i];
          this[i] = buffer;
          isSorted = false;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
