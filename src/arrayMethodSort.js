'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      return String(a) > String(b);
    },
  ) {
    // write code here
    let endIndex = this.length;
    let isSorted = false;

    while (!isSorted) {
      isSorted = true;

      for (let i = 0; i < endIndex - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a, b) > 0) {
          [this[i], this[i + 1]] = [b, a];
          isSorted = false;
        }
      }

      endIndex--;
    }

    return this;
  }
}

module.exports = applyCustomSort;