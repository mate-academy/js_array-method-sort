'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compareFn = compareFunction;
    const arr = this;
    const length = arr.length;

    // Se não houver compareFn, usamos o comportamento padrão
    if (typeof compareFn !== 'function') {
      compareFn = function (a, b) {
        const strA = String(a);
        const strB = String(b);

        if (strA < strB) {
          return -1;
        }

        if (strA > strB) {
          return 1;
        }

        return 0;
      };
    }

    // Bubble Sort
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (compareFn(arr[j], arr[j + 1]) > 0) {
          // swap manual
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
