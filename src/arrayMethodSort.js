'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (x, y) => x.toString() > y.toString(),
) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const buf = this[i];

          this[i] = this[j];
          this[j] = buf;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
