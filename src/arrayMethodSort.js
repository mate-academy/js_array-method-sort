'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare = compareFunction || ((a, b) => String(a) > String(b));

    const mergeSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);

      return merge(mergeSort(left), mergeSort(right));
    };

    const merge = (left, right) => {
      const resultArray = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (compare(left[leftIndex], right[rightIndex]) <= 0) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    };

    const sortedArray = mergeSort(this);

    for (let i = 0; i < this.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
