'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (elem1, elem2) => elem1.toString() > elem2.toString()
  ) {
    // write code here
    const bubbleSort = (arr) => {
      for (let i = 0; i < arr.length - 1; i++) {
        let wasSwap = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {
          if (compareFunction(arr[j], arr[j + 1]) > 0) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            wasSwap = true;
          }
        }

        if (!wasSwap) {
          break;
        }
      }

      return arr;
    };

    bubbleSort(this);

    return this;
  };
}

module.exports = applyCustomSort;
