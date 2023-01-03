'use strict';

/**
 * Implement method Sort
 */

function sortedString(a, b) {
  const first = String(a);
  const second = String(b);

  if (first < second) {
    return -1;
  }

  if (first > second) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortedString) {
    let wasSwap = false;

    while (!wasSwap) {
      wasSwap = true;

      for (let i = 1; i < this.length; i++) {
        const x = this[i - 1];
        const y = this[i];

        if (compareFunction(x, y) > 0) {
          wasSwap = false;
          this[i - 1] = y;
          this[i] = x;
        }

        if (!wasSwap) {
          break;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
