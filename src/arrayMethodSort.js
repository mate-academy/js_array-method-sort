'use strict';

/**
 * Implement method Sort
 */

function compareString(a, b) {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  }

  if (firstString === secondString) {
    return 0;
  }

  return -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
