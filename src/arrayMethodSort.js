'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = [...this];

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        const a = arr[j];
        const b = arr[j + 1];

        const shouldSwap = compareFunction
          ? compareFunction(a, b) > 0
          : String(a) > String(b);

        if (shouldSwap) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = arr[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
