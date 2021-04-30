'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback) {
    let compareFunction;

    if (!callback) {
      compareFunction = function(a, b) {
        if (a.toString() > b.toString()) {
          return 1;
        }

        return 0;
      };
    } else {
      compareFunction = callback;
    }

    let countReplacements;

    do {
      countReplacements = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const prev = this[i];

          this[i] = this[i + 1];
          this[i + 1] = prev;
          countReplacements++;
        }
      }
    } while (countReplacements > 0);

    return this;
  };
}

module.exports = applyCustomSort;
