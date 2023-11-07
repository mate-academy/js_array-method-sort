'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (previous, current) => {
  const previousString = previous.toString();
  const currentString = current.toString();

  if (previousString > currentString) {
    return 1;
  }

  if (previousString === currentString) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let sorted;

    for (let j = this.length - 1; j > 0; j--) {
      sorted = true;

      for (let i = 1; i <= j; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          sorted = false;
          this[i - 1] = current;
          this[i] = prev;
        }
      }

      if (sorted) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
