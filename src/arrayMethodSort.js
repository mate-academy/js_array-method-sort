'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction1) {
    const compareFunction =
      compareFunction1 ||
      ((a, b) => {
        if (String(a) < String(b)) {
          return -1;
        } else if (String(a) > String(b)) {
          return 1;
        } else {
          return 0;
        }
      });
    let swapped = true;

    while (swapped) {
      swapped = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          swapped = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
