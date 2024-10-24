'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compFunction =
      compareFunction ||
      function (a, b) {
        if (typeof a === 'string' && typeof b === 'string') {
          if (a < b) {
            return -1;
          }

          if (a > b) {
            return 1;
          }

          return 0;
        }

        return a.toString().localeCompare(b.toString());
      };

    let n = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {
        if (compFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          swapped = true;
        }
      }

      n--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
