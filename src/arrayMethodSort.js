'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunc = (a, b) => String(a) > String(b)
  ) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunc(previousElement, currentElement) > 0) {
          this[i - 1] = currentElement;
          this[i] = previousElement;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
