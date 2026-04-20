'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compareFn =
      compareFunction ||
      function (a, b) {
        const strA = String(a);
        const strB = String(b);

        if (strA < strB) {
          return -1;
        }

        if (strA > strB) {
          return 1;
        }

        return 0;
      };

    const len = this.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (compareFn(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
