'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    let comparison = compareFunction;

    if (!comparison) {
      comparison = (a, b) => {
        const currentValue = a.toString();
        const nextValue = b.toString();

        if (currentValue > nextValue) {
          return 1;
        } else if (currentValue < nextValue) {
          return -1;
        } else {
          return 0;
        }
      };
    }

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (comparison(arr[j], arr[j + 1]) > 0) {
          // Обмін місцями елементів
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
