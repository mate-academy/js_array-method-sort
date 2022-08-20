'use strict';

/**
 * Implement method Sort
 */

function compareStrings(x, y) {
  const string1 = String(x);
  const string2 = String(y);

  if (string1 > string2) {
    return 1;
  }

  if (string1 < string2) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}
module.exports = applyCustomSort;
