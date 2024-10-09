'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const compare =
      compareFunction ||
      function (a, b) {
        if (String(a) > String(b)) {
          return 1;
        }

        if (String(a) < String(b)) {
          return -1;
        }

        return 0;
      };

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
