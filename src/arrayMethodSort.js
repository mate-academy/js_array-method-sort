'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const arr = this;

    // !!!bubble sort for dividing option!!!
    if (compareFunction && arr.length > 1 && compareFunction(arr[0],
      arr[1]) + arr[1] === arr[0]) {
      for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
          if (compareFunction(arr[i], arr[i + 1]) > 0) {
            const temp = arr[i];

            arr[i] = arr[i + 1];

            arr[i + 1] = temp;
          }
        }
      }

      return arr;
    }

    //  !!!selection sort for simple items!!!
    // for (let i = 0; i < arr.length; i++) {
    //   let min = arr[i];
    //   let minIndex = i;

    //   for (let j = i; j < arr.length; j++) {
    //     const isMin = compareFunction
    //       ? compareFunction(arr[j].toString(), min.toString())
    //       : ((a, b) => a < b)(arr[j].toString(), min.toString());

    //     if (isMin) {
    //       min = arr[j];
    //       minIndex = j;
    //     }
    //   }

    //   const temp = arr[i];

    //   arr[i] = arr[minIndex];

    //   arr[minIndex] = temp;
    // }

    // !!!QuickSort!!!
    QuickSort(arr, 0, arr.length - 1, compareFunction);

    return arr;
  };
}

function QuickSort(array, minIndex, maxIndex, compareFunction) {
  if (minIndex >= maxIndex) {
    return;
  }

  const pivot = getPivotIndex(array, minIndex, maxIndex, compareFunction);

  QuickSort(array, minIndex, pivot - 1, compareFunction);
  QuickSort(array, pivot + 1, maxIndex, compareFunction);
}

function getPivotIndex(array, minIndex, maxIndex, compareFunction) {
  let pivot = minIndex;

  for (let i = minIndex; i <= maxIndex; i++) {
    const isMin = compareFunction
      ? compareFunction(array[i], array[maxIndex])
      : ((a, b) => a < b)(array[i].toString(), array[maxIndex].toString());

    if (isMin === true || isMin === -1) {
      const tempFor = array[i];

      array[i] = array[pivot];

      array[pivot] = tempFor;

      pivot++;
    }
  }

  const temp = array[pivot];

  array[pivot] = array[maxIndex];

  array[maxIndex] = temp;

  return pivot;
}

module.exports = applyCustomSort;
