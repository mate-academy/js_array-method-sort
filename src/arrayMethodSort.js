'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) =>
    String(a) > String(b) ? 1 : String(b) > String(a) ? -1 : 0;

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let index;

    do {
      index = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (compareFunction(prev, next) > 0) {
          index++;
          this[i - 1] = next;
          this[i] = prev;
        }
      }
    } while (index > 0);

    return this;
  };
}

module.exports = applyCustomSort;
