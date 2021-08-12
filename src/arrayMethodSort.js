'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count = 0;
    let prev = null;
    let now = null;
    let totalCompare = null;

    if (!compareFunction) {
      const defaultCompare = (a, b) => {
        if (String(a) > String(b)) {
          return 1;
        }

        if (String(a) < String(b)) {
          return -1;
        }

        return 0;
      };

      totalCompare = defaultCompare;
    } else {
      totalCompare = compareFunction;
    }

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];
        now = this[i];

        if (totalCompare(prev, now) > 0) {
          this[i - 1] = now;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
