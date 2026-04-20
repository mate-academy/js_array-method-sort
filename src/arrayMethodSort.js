'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Create a new variable for the comparison function
    const compareFn = typeof compareFunction === 'function' ? compareFunction : (a, b) => {
      if (a === b) return 0;
      if (a === undefined) return 1;
      if (b === undefined) return -1;
      if (a === null) return 1;
      if (b === null) return -1;
      const aString = String(a);
      const bString = String(b);
      if (aString < bString) return -1;
      if (aString > bString) return 1;
      return 0;
    };

    // Merge sort implementation
    const merge = (left, right) => {
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (compareFn(left[leftIndex], right[rightIndex]) <= 0) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };

    const mergeSort = arr => {
      if (arr.length <= 1) return arr;
      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);
      return merge(mergeSort(left), mergeSort(right));
    };

    const sortedArray = mergeSort(this);

    // Copy sorted elements back to the original array
    for (let i = 0; i < this.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
