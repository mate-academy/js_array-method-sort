'use strict';

/* eslint-disable no-extend-native */

function applyCustomSort() {
  Array.prototype.sort2 = function (compareFunction) {
    const arr = this;

    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA > strB) return 1;
      if (strA < strB) return -1;
      return 0;
    };

    const compare = compareFunction || defaultCompare;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (compare(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
