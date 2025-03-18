'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const f =
      compareFunction === undefined
        ? (a, b) => String(a) > String(b)
        : compareFunction;

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        if (f(this[i], this[i + 1]) > 0) {
          const tmp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
