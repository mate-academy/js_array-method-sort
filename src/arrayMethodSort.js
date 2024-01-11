'use strict';

/**
 * Implement method Sort
 *
 * numbers = [5, 17, 2, 5, 3, 4]
 */

function stringsComparator(a, b) {
  const first = a.toString();
  const second = b.toString();

  if (first > second) {
    return 1;
  } else if (first === second) {
    return 0;
  } else {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringsComparator) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstValue = this[i - 1];
        const secondValue = this[i];

        if (compareFunction(firstValue, secondValue) > 0) {
          this[i - 1] = secondValue;
          this[i] = firstValue;
          count++;
        }
      }
    } while (count !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
