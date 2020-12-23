'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (first, second) => {
    const firstToString = first.toString();
    const secondToString = second.toString();

    if (firstToString < secondToString) {
      return -1;
    } else if (firstToString > secondToString) {
      return 1;
    } else {
      return 0;
    }
  }) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElement = this[i - 1];
        const secondElement = this[i];

        if (compareFunction(firstElement, secondElement) > 0) {
          count++;
          this[i - 1] = secondElement;
          this[i] = firstElement;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
