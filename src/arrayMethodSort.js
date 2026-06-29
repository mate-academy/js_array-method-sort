'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function swap(arr, index1, index2) {
    const temp = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  [].__proto__.sort2 = function (compareFunction) {
    let compare = compareFunction;

    if (compare === undefined) {
      compare = (element1, element2) => {
        if (String(element1) > String(element2)) {
          return 1;
        }

        if (String(element1) < String(element2)) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0) {
          swap(this, i, j);
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
