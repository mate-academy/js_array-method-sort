'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length < 2) {
      return this;
    }

    const comparator = compareFunction || defaultComparator;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (comparator(this[i], this[i + 1]) > 0) {
          swap(this, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);

    return this;

    function defaultComparator(a, b) {
      return a.toString() > b.toString();
    }

    function swap(arr, i, j) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  };
}

module.exports = applyCustomSort;
