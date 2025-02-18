'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    for (let i = this.length - 1; i > 0; i--) {
      for (let y = 0; y < i; y++) {
        if (compareFunction) {
          if (compareFunction(this[y], this[y + 1]) > 0) {
            const temp = this[y];

            this[y] = this[y + 1];
            this[y + 1] = temp;
          }
        } else {
          if (compareFunction(this[y], this[y + 1])) {
            const temp = this[y];

            this[y] = this[y + 1];
            this[y + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
