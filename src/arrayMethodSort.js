'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const cmp =
      compareFunction ||
      ((a, b) => {
        const strA = String(a);
        const strB = String(b);

        if (strA < strB) {
          return -1;
        }

        if (strA > strB) {
          return 1;
        }

        return 0;
      });

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (cmp(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];

          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
