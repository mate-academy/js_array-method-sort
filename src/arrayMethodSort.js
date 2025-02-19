'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) =>
      String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0,
  ) {
    let n = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
