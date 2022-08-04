'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultMethod = !compareFunction;
    let reordered;

    do {
      reordered = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];
        const diff = !defaultMethod
          ? compareFunction(prev, current)
          : +(String(prev) > String(current));

        if (diff > 0) {
          this[i - 1] = current;
          this[i] = prev;
          reordered = true;
        }
      }
    } while (reordered);

    return this;
  };
}

module.exports = applyCustomSort;
