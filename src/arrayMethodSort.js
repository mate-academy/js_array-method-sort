'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const arrLength = arr.length;

    const cmp =
      compareFunction ||
      ((a, b) => {
        const strA = String(a);
        const strB = String(b);

        const aCode = strA.charCodeAt(0);
        const bCode = strB.charCodeAt(0);

        if (aCode < bCode) {
          return -1;
        }

        if (aCode > bCode) {
          return 1;
        }

        return strA.localeCompare(strB);
      });

    for (let i = 0; i < arrLength; i++) {
      for (let j = i + 1; j < arrLength; j++) {
        if (cmp(arr[i], arr[j]) > 0) {
          const remember = arr[i];

          arr[i] = arr[j];
          arr[j] = remember;
        }
      }
    }

    return arr;
  };

  return this;
}

module.exports = applyCustomSort;
