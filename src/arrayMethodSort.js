"use strict";

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    // write code here
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

function defaultCompare(a, b) {
  const first = a.toString();
  const second = b.toString();

  if (first < second) {
    return -1;
  }

  if (first > second) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
