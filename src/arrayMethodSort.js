'use strict';

/**
 * Implement method Sort
 */
/* eslint-disable no-extend-native */

Array.prototype.sort2 = function (compareFn) {
  const arr = this;
  let compare;

  if (typeof compareFn === 'function') {
    compare = compareFn;
  } else {
    compare = function (a, b) {
      const A = String(a);
      const B = String(b);
      const len = Math.min(A.length, B.length);

      for (let i = 0; i < len; i += 1) {
        const diff = A.charCodeAt(i) - B.charCodeAt(i);

        if (diff !== 0) {
          return diff;
        }
      }

      return A.length - B.length;
    };
  }

  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = 0; j < arr.length - 1 - i; j += 1) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

function applyCustomSort() {
  Array.prototype.sort = function (compareFn) {
    return [].__proto__.sort2.call(this, compareFn);
  };
}

/* eslint-enable no-extend-native */

module.exports = applyCustomSort;
