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

    if (typeof compareFunction !== 'function') {
      throw new Error('compareFunction is not valid');
    }

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (compareFunction(current, next) > 0) {
          count++;
          this[i] = next;
          this[i + 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
