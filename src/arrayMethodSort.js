'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevCompareEl = this[i - 1];
        const currCompareEl = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          count++;
          this[i] = prevCompareEl;
          this[i - 1] = currCompareEl;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareAsStrings(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  }

  if (strA === strB) {
    return 0;
  }

  return -1;
}

module.exports = applyCustomSort;
