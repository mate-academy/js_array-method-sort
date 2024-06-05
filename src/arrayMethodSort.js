'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (String(a) < String(b)) {
        return -1;
      }

      if (String(a) > String(b)) {
        return 1;
      }

      return 0;
    },
  ) {
    if (typeof compareFunction !== 'function') {
      throw new TypeError('compareFunction must be a function');
    }

    quickSort(this, compareFunction, 0, this.length - 1);

    return this;
  };
}

function quickSort(array, compareFunction, left, right) {
  if (left < right) {
    const pivotIndex = partition(array, compareFunction, left, right);

    quickSort(array, compareFunction, left, pivotIndex - 1);
    quickSort(array, compareFunction, pivotIndex + 1, right);
  }
}

function partition(array, compareFunction, left, right) {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (compareFunction(array[j], pivot) <= 0) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[right]] = [array[right], array[i + 1]];

  return i + 1;
}

module.exports = applyCustomSort;
