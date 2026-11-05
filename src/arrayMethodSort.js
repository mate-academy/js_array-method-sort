'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultFn = (x, y) => {
    return x.toString() > y.toString()
      ? 1
      : x.toString() < y.toString()
        ? -1
        : 0;
  };

  [].__proto__.sort2 = function (compareFunction = defaultFn) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const x = this[i];

          this[i] = this[j];
          this[j] = x;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
