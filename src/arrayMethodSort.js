'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let currentValue;
    let previousValue;
    let isSorted;

    if (compareFunction !== undefined) {
      while (!isSorted) {
        isSorted = true;

        for (let i = 1; i < this.length; i++) {
          previousValue = this[i - 1];
          currentValue = this[i];

          if (compareFunction(previousValue, currentValue) > 0) {
            this[i] = previousValue;
            this[i - 1] = currentValue;
            isSorted = false;
          }
        }
      }

      return this;
    }

    while (!isSorted) {
      isSorted = true;

      for (let i = 1; i < this.length; i++) {
        currentValue = this[i];
        previousValue = this[i - 1];

        if (previousValue.toString() > currentValue.toString()) {
          this[i] = previousValue;
          this[i - 1] = currentValue;
          isSorted = false;
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;

// function insertionSort(arr) {
//   let currentVal;

//   for (let i = 1; i < arr.length; i++) {
//     currentVal = arr[i].toString;

//     let j = i - 1;

//     for (; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }

//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }
