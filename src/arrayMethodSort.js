'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = function (a, b) {
      const elem1 = String(a);
      const elem2 = String(b);

      if (elem1 > elem2) {
        return 1;
      }

      if (elem1 < elem2) {
        return -1;
      }

      return 0;
    },
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let i2 = 0; i2 < this.length - 1; i2++) {
        if (compareFunction(this[i2], this[i2 + 1]) > 0) {
          const element = this[i2 + 1];

          this[i2 + 1] = this[i2];
          this[i2] = element;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
