'use strict';

/**
 * Implement method Sort
 */

const quickSort = (arr, compare) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) {
      continue;
    }

    if (compare(arr[i], pivot) < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left, compare), pivot, ...quickSort(right, compare)];
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare = compareFunction || ((a, b) => (`${a}` > `${b}` ? 1 : -1));

    const sorted = quickSort(this, compare);

    for (let i = 0; i < sorted.length; i++) {
      this[i] = sorted[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
