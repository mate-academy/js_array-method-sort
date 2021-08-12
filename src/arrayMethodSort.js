'use strict';

/**
 * Implement method Sort
 */
function compareStrings(a, b) {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  }

  if (firstString < secondString) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(previousElement, currentElement) > 0) {
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
