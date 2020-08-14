'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) > String(b)) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const element = this[i];

        if (compareFunction(this[i], this[i + 1]) > 0) {
          this[i] = this[i + 1];
          this[i + 1] = element;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
