'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const compare =
      compareFunction ||
      ((a, b) => {
        const first = String(a);
        const second = String(b);

        if (first < second) {
          return -1;
        }

        if (first > second) {
          return 1;
        }

        return 0;
      });

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
