"use strict";

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b)
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let k = 0; k < this.length - i - 1; k++) {
        if (compareFunction(this[k], this[k + 1]) > 0) {
          const temp = this[k];

          this[k] = this[k + 1];
          this[k + 1] = temp;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
