'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      function (a, b) {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr < bStr) {
          return -1;
        }

        if (aStr > bStr) {
          return 1;
        }

        return 0;
      };

    let swapped = true;

    while (swapped) {
      swapped = false;

      for (let i = 1; i < this.length; i++) {
        if (compare(this[i - 1], this[i]) > 0) {
          const temp = this[i];

          this[i] = this[i - 1];
          this[i - 1] = temp;
          swapped = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
