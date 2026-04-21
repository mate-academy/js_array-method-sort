'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (userCompareFunction) {
    const compareFunction =
      userCompareFunction ||
      ((a, b) => {
        const strA = String(a);
        const strB = String(b);

        const isUpperA = strA[0] >= 'A' && strA[0] <= 'Z';
        const isUpperB = strB[0] >= 'A' && strB[0] <= 'Z';

        if (isUpperA && !isUpperB) {
          return -1;
        }

        if (!isUpperA && isUpperB) {
          return 1;
        }

        return strA.localeCompare(strB);
      });

    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
