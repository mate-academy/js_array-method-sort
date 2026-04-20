"use strict";

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const callback =
      typeof compareFunction === "function"
        ? compareFunction
        : (a, b) =>
            String(a).localeCompare(String(b), undefined, {
              sensitivity: "case",
            });

    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (callback(this[j], this[i]) > 0) {
          swap(this, i, j);
        }
      }
    }

    return this;
  };
}

function swap(arr, firstElementIndex, secondElementIndex) {
  const tempPlaceHolder = arr[firstElementIndex];
  arr[firstElementIndex] = arr[secondElementIndex];
  arr[secondElementIndex] = tempPlaceHolder;
}

module.exports = applyCustomSort;
