'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i] = previous;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function sortAsStrings(previous, current) {
  const previousString = String(previous);
  const currentString = String(current);

  if (previousString > currentString) {
    return 1;
  }

  if (previousString < currentString) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
