'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;

    let callback = compareFunction;

    if (arguments.length === 0) {
      callback = (prev, current) => {
        const prevToString = String(prev);
        const currentToString = String(current);

        if (prevToString > currentToString) {
          return 1;
        }

        if (prevToString < currentToString) {
          return -1;
        }

        return 0;
      };
    }

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
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
