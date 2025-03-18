'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const cmp =
      compareFunction ||
      function (a, b) {
        const strA = String(a);
        const strB = String(b);

        if (strA > strB) {
          return 1;
        }

        if (strA < strB) {
          return -1;
        }

        return 0;
      };

    // Простая пузырьковая сортировка
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
