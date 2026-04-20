'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareFnDefault = (a, b) => String(a) > String(b) ? 1 : -1;

  [].__proto__.sort2 = function(compareFunction = compareFnDefault) {
    for (let i = 0; i < this.length - 1; i++) {
      const res = compareFunction(this[i], this[i + 1]);

      if (res > 0) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];

        i = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
