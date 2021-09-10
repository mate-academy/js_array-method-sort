'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let callback = compareFunction;

    if (callback === undefined) {
      callback = defaultCallback;
    }

    quickSort(this, 0, this.length - 1, callback);

    return this;
  };
}

function quickSort(arr, low, high, callback) {
  if (callback(String(low), String(high)) < 0) {
    const pi = partition(arr, low, high, callback);

    quickSort(arr, low, pi - 1, callback);
    quickSort(arr, pi + 1, high, callback);
  }
}

function partition(arr, low, high, callback) {
  const pivot = arr[high];

  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (callback(arr[j], pivot) < 0) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);

  return i + 1;
}

function swap(arr, low, high) {
  const temp = arr[low];

  arr[low] = arr[high];
  arr[high] = temp;
}

const defaultCallback = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
