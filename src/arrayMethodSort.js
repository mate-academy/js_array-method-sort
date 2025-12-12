'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const len = this.length;

    const compareElements =
      compareFunction ||
      function (a, b) {
        const strA = String(a);
        const strB = String(b);

        const firstA = strA[0];
        const firstB = strB[0];

        const isUpperA = firstA >= 'A' && firstA <= 'Z';
        const isUpperB = firstB >= 'A' && firstB <= 'Z';
        const isLowerA = firstA >= 'a' && firstA <= 'z';
        const isLowerB = firstB >= 'a' && firstB <= 'z';

        if (isUpperA && isLowerB) {
          return -1;
        }

        if (isLowerA && isUpperB) {
          return 1;
        }

        return strA.localeCompare(strB);
      };

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (compareElements(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
