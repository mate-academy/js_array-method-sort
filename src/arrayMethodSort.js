'use strict';

/**
 * Implement method Sort
 */

function compareAsString(a, b) {
  const valueA = String(a);
  const valueB = String(b);

  if (valueA > valueB) {
    return 1;
  }

  if (valueA < valueB) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    if (compareFunction === undefined) {
      return this;
    }

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a, b) > 0) {
          count++;
          this[i] = b;
          this[i + 1] = a;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
