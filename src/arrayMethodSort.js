'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (a, b) => {
    const firstEl = String(a);
    const secondEl = String(b);

    if (firstEl > secondEl) {
      return 1;
    } else if (firstEl === secondEl) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          count++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
