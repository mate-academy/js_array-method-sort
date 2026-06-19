'use strict';

/**
 * Implement method Sort
 */
const compareAsString = (a, b) => {
  return String(a) > String(b);
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    // write code here
    let hasShuffle = true;

    do {
      hasShuffle = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          hasShuffle = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (hasShuffle);

    return this;
  };
}

module.exports = applyCustomSort;
