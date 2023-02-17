'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsString(x, y) {
    const firstString = String(x);
    const secondString = String(y);

    if (firstString > secondString) {
      return 1;
    } else if (firstString === secondString) {
      return 0;
    } else {
      return -1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareAsString) {
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
