/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      compareFunction = (a, b) => {
        if (a === undefined) {
          return 1;
        }

        if (b === undefined) {
          return -1;
        }

        const strA = String(a);
        const strB = String(b);

        return strA < strB ? -1 : strA > strB ? 1 : 0;
      };
    }

    quickSort(this, 0, this.length - 1, compareFunction);

    return this;
  };
}

function quickSort(arr, low, high, compareFunction) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high, compareFunction);

    quickSort(arr, low, pivotIndex - 1, compareFunction);
    quickSort(arr, pivotIndex + 1, high, compareFunction);
  }
}

function partition(arr, low, high, compareFunction) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (compareFunction(arr[j], pivot) < 0) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

module.exports = applyCustomSort;
