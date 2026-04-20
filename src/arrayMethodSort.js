'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const cmp =
      compareFunction ??
      function (s1, s2) {
        if (s1 === null || s2 === undefined) {
          return 1;
        }

        return s1?.toString() > s2?.toString()
          ? 1
          : s1?.toString() < s2?.toString()
            ? -1
            : 0;
      };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (cmp(this[j], this[j + 1]) > 0) {
          const item = this[j];

          this[j] = this[j + 1];
          this[j + 1] = item;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
