'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const comparator =
      compareFunction ||
      ((a, b) => {
        const strA = String(a);
        const strB = String(b);

        return strA > strB ? 1 : -1;
      });

    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;

[1, 2, 3].sort2((a, b) => b - a);
