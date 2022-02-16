'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  } else if (firstString < secondString) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          count += 1;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
