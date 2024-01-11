'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(first, second) {
  const firstString = String(first);
  const secondString = String(second);

  if (firstString > secondString) {
    return 1;
  } else if (firstString === secondString) {
    return 0;
  } else {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isSorted;

    do {
      isSorted = false;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          isSorted = true;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
