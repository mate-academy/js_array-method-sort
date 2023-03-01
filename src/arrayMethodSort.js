'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => {
  return a.toString() > b.toString();
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const firstElement = this[i];
        const secondElement = this[i + 1];

        if (compareFunction(firstElement, secondElement) > 0) {
          count++;

          this[i] = secondElement;
          this[i + 1] = firstElement;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
