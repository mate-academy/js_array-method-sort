'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compareAsString) {
    let swaps;

    do {
      swaps = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const firstCompare = this[i];
        const secondCompare = this[i + 1];

        if (compareFunction(firstCompare, secondCompare) > 0) {
          this[i] = secondCompare;
          this[i + 1] = firstCompare;
          swaps++;
        }
      }
    } while (swaps > 0);

    return this;
  };
}

function compareAsString(a, b) {
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

module.exports = applyCustomSort;
