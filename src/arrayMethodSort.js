/* eslint-disable prettier/prettier */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;
    const cmp =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
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

    function merge(left, right) {
      const result = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
        if (cmp(left[i], right[j]) <= 0) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }

      while (i < left.length) {
        result.push(left[i]);
        i++;
      }

      while (j < right.length) {
        result.push(right[j]);
        j++;
      }

      return result;
    }

    function mergeSort(arr) {
      if (arr.length <= 1) {
        return arr;
      }

      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      return merge(left, right);
    }

    const sorted = mergeSort(array.slice());

    for (let index = 0; index < sorted.length; index++) {
      array[index] = sorted[index];
    }

    return array;
  };
}
module.exports = applyCustomSort;
