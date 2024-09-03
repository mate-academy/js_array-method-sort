'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1),
  ) {
    let swapped;
    let n = this.length;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (compareFunction) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
            swapped = true;
          }
        }
      }
      n--;
    } while (swapped);

    return this;
  };

  return this;
}

module.exports = applyCustomSort;
