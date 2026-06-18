'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = compareFunction;

    if (typeof compare !== 'function') {
      compare = function (a, b) {
        const aString = String(a);
        const bString = String(b);

        if (aString < bString) {
          return -1;
        }

        if (aString > bString) {
          return 1;
        }

        return 0;
      };
    }

    const arr = this.slice();
    const sortedArr = [];

    while (arr.length > 0) {
      let minIndex = 0;

      for (let i = 1; i < arr.length; i++) {
        if (compare(arr[i], arr[minIndex]) < 0) {
          minIndex = i;
        }
      }
      sortedArr.push(arr[minIndex]);
      arr.splice(minIndex, 1);
    }

    for (let i = 0; i < sortedArr.length; i++) {
      this[i] = sortedArr[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
