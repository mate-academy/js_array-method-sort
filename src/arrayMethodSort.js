'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const cur = this[i];
        const comparison = compareFunction(prev, cur);

        if (comparison > 0) {
          this[i - 1] = cur;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareStrings(a, b) {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  }

  return -1;
}

module.exports = applyCustomSort;
