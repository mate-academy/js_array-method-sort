'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((a, b) => {
        const s1 = String(a);
        const s2 = String(b);

        if (s1 < s2) {
          return -1;
        }

        if (s1 > s2) {
          return 1;
        }

        return 0;
      });

    for (let i = 1; i < this.length; i++) {
      const current = this[i];
      let j = i - 1;

      while (j >= 0 && compare(this[j], current) > 0) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = current;
    }

    return this;
  };
}

module.exports = applyCustomSort;
