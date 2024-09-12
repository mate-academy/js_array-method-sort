'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compare = compareFunction;
    let count;

    if (!compare) {
      compare = function(a, b) {
        const strA = a.toString();
        const strB = b.toString();

        if (strA > strB) {
          return 1;
        }

        if (strA < strB) {
          return -1;
        }

        return 0;
      };
    }

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const cur = this[i];

        if (compare(prev, cur) > 0) {
          this[i] = prev;
          this[i - 1] = cur;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
