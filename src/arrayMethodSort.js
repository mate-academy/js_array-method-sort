'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback) {
    const compareFunction = callback
    || ((a, b) => String(a).localeCompare(String(b)));

    let isSwapped;

    do {
      isSwapped = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          isSwapped = true;
        }
      }
    } while (isSwapped);

    return this;
  };
}

module.exports = applyCustomSort;
