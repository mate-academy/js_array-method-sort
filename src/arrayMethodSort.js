'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction || defaultCompare;

    customQuickSort(this, 0, this.length - 1, compare);

    return this;
  };
}

function defaultCompare(a, b) {
  if (a.toString() < b.toString()) {
    return -1;
  }

  if (a.toString() > b.toString()) {
    return 1;
  }

  return 0;
}

function customQuickSort(arr, left, right, compare) {
  if (left < right) {
    const partitionIndex = partition(arr, left, right, compare);

    customQuickSort(arr, left, partitionIndex - 1, compare);
    customQuickSort(arr, partitionIndex + 1, right, compare);
  }
}

function partition(arr, left, right, compare) {
  const pivot = arr[right];
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (compare(arr[j], pivot) <= 0) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, right);

  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];

  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = applyCustomSort;
