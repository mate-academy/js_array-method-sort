'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const comparator = compareFunction !== undefined
      ? compareFunction
      : (a, b) => String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
    let changes = 1;

    while (changes !== 0) {
      changes = 0;

      for (let i = 1; i < this.length; i++) {
        if (comparator(this[i - 1], this[i]) > 0) {
          const tempPrev = this[i - 1];

          this[i - 1] = this[i];
          this[i] = tempPrev;
          changes++;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
