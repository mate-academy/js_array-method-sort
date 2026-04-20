'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback = (a, b) => String(a) > String(b)) {
    const quickSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const pivotIndex = Math.floor(arr.length / 2);
      const pivot = arr[pivotIndex]; // середина.
      const less = [];
      const greater = [];

      for (let i = 0; i < arr.length; i++) {
        // скіп центра щоб не ++ в масиви.
        if (i === pivotIndex) {
          continue;
        }

        if (callback(arr[i], pivot) <= 0) {
          less.push(arr[i]);
        } else {
          greater.push(arr[i]);
        }
      }
      // визиваємо ще раз для того ж масива рекурсивно

      return [...quickSort(less), pivot, ...quickSort(greater)];
    };

    const sortedArray = quickSort(this);

    for (let i = 0; i < this.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
