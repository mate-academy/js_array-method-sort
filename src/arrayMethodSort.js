'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const element1 = this[i - 1];
        const element2 = this[i];

        if (compareFunction(element1, element2) > 0) {
          this[i - 1] = element2;
          this[i] = element1;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
