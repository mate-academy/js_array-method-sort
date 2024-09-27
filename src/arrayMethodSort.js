/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      compareFunction = (a, b) => {
        const isStringA = typeof a === 'string';
        const isStringB = typeof b === 'string';

        if (isStringA && isStringB) {
          const isUpperA = a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90;
          const isUpperB = b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90;

          if (isUpperA && !isUpperB) {
            return -1;
          }

          if (!isUpperA && isUpperB) {
            return 1;
          }
        }

        return String(a).localeCompare(String(b));
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
