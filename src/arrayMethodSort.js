'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    a.toString() > b.toString()) {
    function swap(items, firstIndex, secondIndex) {
      const temp = items[firstIndex];

      items[firstIndex] = items[secondIndex];
      items[secondIndex] = temp;
    }

    const partition = (arr, low, high) => {
      const pivot = arr[Math.floor((low + high) / 2)];
      let i = low;
      let j = high;

      while (i <= j) {
        while (compareFunction(arr[i], pivot) < 0) {
          i++;
        }

        while (compareFunction(arr[j], pivot) > 0) {
          j--;
        }

        if (i <= j) {
          swap(arr, i, j);
          i++;
          j--;
        }
      }

      return i;
    };

    const quicksort = (arr, low, high) => {
      if (arr.length > 1) {
        const index = partition(arr, low, high);

        if (low < index - 1) {
          quicksort(arr, low, index - 1);
        }

        if (index < high) {
          quicksort(arr, index, high);
        }
      }
    };

    quicksort(this, 0, this.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
