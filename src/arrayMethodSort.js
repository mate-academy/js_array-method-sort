'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    mergeSort(this, 0, this.length - 1, compareFunction);

    return this;
  };
}

function defaultCompare(a, b) {
  const aString = String(a);
  const bString = String(b);

  if (aString > bString) {
    return 1;
  }

  if (aString < bString) {
    return -1;
  }

  if (aString === bString) {
    return 0;
  }
}

function mergeSort(arr, left, right, callback) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor(left + (right - left) / 2);

  mergeSort(arr, left, mid, callback);
  mergeSort(arr, mid + 1, right, callback);
  merge(arr, left, mid, right, callback);
}

function merge(arr, left, mid, right, callback) {
  const leftArraySize = mid - left + 1;
  const rightArraySize = right - mid;

  const leftArray = new Array(leftArraySize);
  const rightArray = new Array(rightArraySize);

  for (let leftIndex = 0; leftIndex < leftArraySize; leftIndex++) {
    leftArray[leftIndex] = arr[left + leftIndex];
  }

  for (let rightIndex = 0; rightIndex < rightArraySize; rightIndex++) {
    rightArray[rightIndex] = arr[mid + 1 + rightIndex];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArraySize && j < rightArraySize) {
    const compareResult = callback(leftArray[i], rightArray[j]);

    if (compareResult <= 0) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArraySize) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArraySize) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
}

module.exports = applyCustomSort;
