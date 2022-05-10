'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCallback = function(a, b) {
    if (a.toString() > b.toString()) {
      return 1;
    }

    if (a.toString() === b.toString()) {
      return 0;
    }

    if (a.toString() < b.toString()) {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultCallback) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
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
