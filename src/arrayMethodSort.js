'use strict';

const GREATER = 1;
const EQUAL = 0;
const LESS = -1;

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length <= 1) {
      return this;
    }

    const comparator = compareFunction ?? compareElements;

    quickSort(this, 0, this.length - 1, comparator);

    return this;
  };
}

function compareElements(a, b) {
  const leftElement = String(a);
  const rightElement = String(b);
  let result = EQUAL;

  if (leftElement > rightElement) {
    result = GREATER;
  }

  if (leftElement < rightElement) {
    result = LESS;
  }

  return result;
}

module.exports = applyCustomSort;

function quickSort(array, left, right, callback) {
  if (left >= right) {
    return;
  }

  const part = partition(array, left, right, callback);

  quickSort(array, left, part - 1, callback);
  quickSort(array, part + 1, right, callback);
}

function partition(array, left, right, callback) {
  const pivot = array[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (callback(array[j], pivot) < 0) {
      i++;

      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  [array[i + 1], array[right]] = [array[right], array[i + 1]];

  return i + 1;
}
