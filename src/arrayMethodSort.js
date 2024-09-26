'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b) ? 1 : 0) {
    let changes;

    do {
      changes = 0;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          changes++;
          this[i - 1] = b;
          this[i] = a;
        }
      }
    } while (changes > 0);

    return this;
  };
}

module.exports = applyCustomSort;
