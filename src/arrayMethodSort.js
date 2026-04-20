'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compare =
      compareFunction !== undefined
        ? compareFunction
        : (item1, item2) => (String(item1) > String(item2) ? 1 : -1);

    mergeSort(compare, this);

    return this;
  };
}

function mergeSort(compareFunction, arr) {
  let step = 1;
  const n = arr.length;

  while (step < n) {
    let start = 0;

    while (start + step < n) {
      const mid = start + step;
      const end = Math.min(mid + step, n);

      merge(compareFunction, arr, start, mid, end);

      start = end;
    }

    step *= 2;
  }

  return arr;
}

function merge(compareFunction, arr, start, mid, end) {
  const left = arr.slice(start, mid);
  const right = arr.slice(mid, end);

  let i = start;

  while (left.length !== 0 && right.length !== 0) {
    if (compareFunction(left[0], right[0]) > 0) {
      arr[i++] = right.shift();
    } else {
      arr[i++] = left.shift();
    }
  }

  left.forEach((element) => {
    arr[i++] = element;
  });

  right.forEach((element) => {
    arr[i++] = element;
  });
}

module.exports = applyCustomSort;
