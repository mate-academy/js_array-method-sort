'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) =>
      String(a) === String(b) ? 0 : String(a) > String(b) ? 1 : -1,
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const el1 = String(this[i]);
        const el2 = String(this[j]);

        if (compareFunction(el1, el2) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
