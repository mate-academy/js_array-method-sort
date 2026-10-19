'use strict';

/**
 * Implement method Sort
 */
[].__proto__.sort2 = function (compareFunction) {
  const arr = this;
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      let shouldSwap = false;

      if (compareFunction) {
        shouldSwap = compareFunction(arr[j], arr[j + 1]) > 0;
      } else {
        shouldSwap = String(arr[j]) > String(arr[j + 1]);
      }

      if (shouldSwap) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};
