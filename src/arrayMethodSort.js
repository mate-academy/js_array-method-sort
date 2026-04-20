'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const swap =
      compareFunction ||
      ((a, b) => {
        const item1 = String(a);
        const item2 = String(b);

        return item1 > item2;
      });

    for (let i = 0; i < this.length - 1; i++) {
      const current = this[i];

      if (swap(this[i], this[i + 1]) > 0) {
        this[i] = this[i + 1];
        this[i + 1] = current;

        i = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
