'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    function defaultComparator(next, prev) {
      return String(next) < String(prev) ? -1 : 1;
    };

    function swap(arr, prevIdx, nextIdx) {
      const tmp = arr[prevIdx];

      arr[prevIdx] = arr[nextIdx];
      arr[nextIdx] = tmp;
    }

    const comparator = compareFunction || defaultComparator;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (comparator(this[j + 1], this[j]) < 0) {
          swap(this, j, j + 1);
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
