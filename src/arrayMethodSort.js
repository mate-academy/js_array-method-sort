'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareString(a, b) {
    const fiirstString = String(a);
    const secondString = String(b);

    if (fiirstString > secondString) {
      return 1;
    }

    if (fiirstString === secondString) {
      return 0;
    }

    return -1;
  }

  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const firstElement = this[i];
        const secondElement = this[i + 1];

        if (compareFunction(firstElement, secondElement) > 0) {
          this[i] = secondElement;
          this[i + 1] = firstElement;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
