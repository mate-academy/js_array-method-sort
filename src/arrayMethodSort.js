'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let functionCompare = function(first, second) {
      const firsrStr = first + '';
      const secondStr = second + '';

      if (firsrStr > secondStr) {
        return 1;
      } else if (firsrStr < secondStr) {
        return -1;
      } else {
        return 0;
      }
    };

    if (arguments.length && (typeof compareFunction === 'function')) {
      functionCompare = compareFunction;
    }

    const mySort = function(start, end, array) {
      if ((end - start) < 1) {
        return;
      }

      if ((end - start) === 1) {
        if (functionCompare(array[end], array[start]) < 0) {
          const temp2 = array[end];

          array[end] = array[start];
          array[start] = temp2;
        }

        return;
      }

      const pivot = array[start];
      let leftIndex = start + 1;
      let rightIndex = end;

      while (true) {
        while (functionCompare(array[rightIndex], pivot) >= 0
          && rightIndex > start
        ) {
          --rightIndex;
        }

        while (functionCompare(array[leftIndex], pivot) < 0
          && leftIndex < end
        ) {
          ++leftIndex;
        }

        if (rightIndex > leftIndex) {
          const temp3 = array[leftIndex];

          array[leftIndex] = array[rightIndex];
          array[rightIndex] = temp3;
          leftIndex++;
          rightIndex--;
        } else {
          break;
        }
      }

      const temp = array[start];

      array[start] = array[rightIndex];
      array[rightIndex] = temp;
      mySort(start, rightIndex - 1, array);
      mySort(rightIndex + 1, end, array);
    };

    mySort(0, this.length - 1, this);

    return this;
  };
}

module.exports = applyCustomSort;
