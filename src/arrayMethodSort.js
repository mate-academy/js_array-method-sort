'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      return a.toString() > b.toString()
        ? 1
        : a.toString() === b.toString()
          ? 0
          : -1;
    },
  ) {
    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const backup = this[i];

          this[i] = this[i - 1];
          this[i - 1] = backup;
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
