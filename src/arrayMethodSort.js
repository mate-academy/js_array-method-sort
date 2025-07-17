'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (a.toString() > b.toString()) {
        return 1;
      }

      if (a.toString() < b.toString()) {
        return -1;
      }

      if (a.toString() === b.toString()) {
        return 0;
      }
    },
  ) {
    let i, n, first, second;

    for (i = 0; i < this.length; i++) {
      for (n = i + 1; n < this.length; n++) {
        second = this[n];
        first = this[i];

        if (compareFunction(first, second) > 0) {
          this[i] = second;
          this[n] = first;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
