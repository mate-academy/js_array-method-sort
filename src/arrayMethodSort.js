'use strict';

/**
 * Implement method Sort
 */
const localeCompare = function(a, b) {
  const firstString = String(a);
  const secondString = String(b);

  if (firstString > secondString) {
    return 1;
  } else if (firstString === secondString) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = localeCompare) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];

        if (compareFunction(prev, this[i + 1]) > 0) {
          count++;

          this[i] = this[i + 1];
          this[i + 1] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
