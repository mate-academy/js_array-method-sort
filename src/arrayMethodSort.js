'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let count;
    let callback;

    if (!compareFunction) {
      callback = (a, b) => {
        const strA = `${a}`;
        const strB = `${b}`;

        switch (true) {
          case strA > strB:
            return 1;
          case strA === strB:
            return 0;
          default:
            return -1;
        }
      };
    } else {
      callback = compareFunction;
    }

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
