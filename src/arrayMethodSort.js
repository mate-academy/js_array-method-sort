/* eslint-disable indent */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const comparator =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
            const firstItem = String(a);
            const secondItem = String(b);

            return firstItem > secondItem ? 1 : firstItem < secondItem ? -1 : 0;
          };

    const mergeFunction = (left, right) => {
      const result = [];
      let i = 0;
      let j = 0;

      while (i < left.length && j < right.length) {
        if (comparator(left[i], right[j]) <= 0) {
          result.push(left[i]);
          i++;
        } else {
          result.push(right[j]);
          j++;
        }
      }

      return result.concat(left.slice(i)).concat(right.slice(j));
    };

    const mergeSort = (array) => {
      if (array.length <= 1) {
        return array;
      }

      const mid = Math.floor(array.length / 2);
      const left = mergeSort(array.slice(0, mid));
      const right = mergeSort(array.slice(mid));

      return mergeFunction(left, right);
    };

    const sorted = mergeSort([...this]);

    for (let i = 0; i < this.length; i++) {
      this[i] = sorted[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
