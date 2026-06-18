'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction ||
      ((firstElement, secondElement) => {
        const firstString = String(firstElement);
        const secondString = String(secondElement);

        if (firstString > secondString) {
          return 1;
        }

        if (firstString < secondString) {
          return -1;
        }

        return 0;
      });

    const swap = (leftIndex, rightIndex) => {
      const temp = this[leftIndex];

      this[leftIndex] = this[rightIndex];
      this[rightIndex] = temp;
    };

    const partition = (start, end) => {
      const pivot = this[end];
      let smallerElementIndex = start;

      for (let currentIndex = start; currentIndex < end; currentIndex++) {
        if (compare(this[currentIndex], pivot) <= 0) {
          swap(smallerElementIndex, currentIndex);
          smallerElementIndex++;
        }
      }

      swap(smallerElementIndex, end);

      return smallerElementIndex;
    };

    const quickSort = (start, end) => {
      if (start >= end) {
        return;
      }

      const pivotIndex = partition(start, end);

      quickSort(start, pivotIndex - 1);
      quickSort(pivotIndex + 1, end);
    };

    quickSort(0, this.length - 1);

    return this;
  };
}

module.exports = applyCustomSort;
