'use strict';

/**
 * Implement method Sort
 */

const compareAsString = (prev, current) => {
  const prevToString = String(prev);
  const currentToString = String(current);

  if (prevToString > currentToString) {
    return 1;
  } else if (prevToString === currentToString) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];
        const result = compareFunction(prev, current);

        if (result > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
