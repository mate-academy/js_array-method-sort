'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let comparator = compareFunction;

    if (comparator === undefined) {
      comparator = function (a, b) {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        if (String(a) === String(b)) {
          return 0;
        }
      };
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        if (comparator(this[i], this[i + 1]) > 0) {
          const value = this[i];

          this[i] = this[i + 1];
          this[i + 1] = value;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
