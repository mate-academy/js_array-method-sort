'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count;
    let callback;

    compareFunction
      ? callback = compareFunction
      : callback = (a, b) => {
        const strA = a + '';
        const strB = b + '';

        if (strA > strB) {
          return 1;
        } else if (strA === strB) {
          return 0;
        } else {
          return -1;
        }
      };

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (callback(prev, next) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = next;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
