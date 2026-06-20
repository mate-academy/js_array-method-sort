'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((a, b) => {
        if (String(a) > String(b)) {
          return 1;
        }

        if (String(a) < String(b)) {
          return -1;
        }
      });

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const value = this[j];

        if (compare(value, this[j + 1]) > 0) {
          this[j] = this[j + 1];
          this[j + 1] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
