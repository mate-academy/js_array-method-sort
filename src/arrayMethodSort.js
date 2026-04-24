'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    // якщо функції немає — стандартна поведінка (як строки)
    const compare =
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

    // bubble sort
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          // обмін місцями
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
