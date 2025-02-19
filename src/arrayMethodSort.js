'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) =>
      String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0,
  ) {
    let length = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
      length--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
