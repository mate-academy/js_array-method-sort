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

        return strA > strB ? 1 : strA < strB ? -1 : 0;
      });

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (comparator(this[i], this[j]) > 0) {
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
