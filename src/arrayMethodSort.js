'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaulSortCallback) {
    let previous;
    let current;
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          current = this[i];
          previous = this[i - 1];
          this[i] = previous;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function defaulSortCallback(a, b) {
  const defaultA = a.toString();
  const defaultB = b.toString();

  return defaultA > defaultB
    ? 1 : defaultA < defaultB
      ? -1 : 0;
}

module.exports = applyCustomSort;
