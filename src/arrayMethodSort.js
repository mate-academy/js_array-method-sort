'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const n = this.length;
    let swapped;

    let compare = compareFunction;

    if (!compareFunction) {
      compare = function (a, b) {
        if (String(a) > String(b)) {
          return 1;
        } else if (String(a) === String(b)) {
          return 0;
        } else {
          return -1;
        }
      };
    }

    for (let i = 0; i < n - 1; i++) {
      swapped = false;

      for (let j = 0; j < n - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
