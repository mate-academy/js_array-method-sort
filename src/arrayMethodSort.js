'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) =>
      String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0,
  ) {
    let wasSorted = false;
    let copy;

    do {
      wasSorted = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          copy = this[i];
          this[i] = this[i + 1];
          this[i + 1] = copy;
          wasSorted = true;
        }
      }
    } while (wasSorted);

    return this;
  };
}

module.exports = applyCustomSort;
