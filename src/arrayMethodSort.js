'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compareAsStrings = (first, second) =>
      String(first) > String(second) ? 1 : -1;
    const compare = compareFunction || compareAsStrings;

    for (let pass = 0; pass < this.length - 1; pass++) {
      for (let index = 0; index < this.length - 1 - pass; index++) {
        const current = this[index];
        const next = this[index + 1];

        if (compare(current, next) > 0) {
          this[index] = next;
          this[index + 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
