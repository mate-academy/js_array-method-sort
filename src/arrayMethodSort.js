'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = function(a, b) {
    if (b.toString() === a.toString()) {
      return 0;
    };

    return a.toString() > b.toString()
      ? 1
      : -1;
  }) {
    let x = 0;

    const isSorted = function(arr) {
      for (let i = 1; i < arr.length; i++) {
        if (compareFunction(arr[i - 1], arr[i]) > 0) {
          return false;
        }
      }

      return true;
    };

    while (!isSorted(this)) {
      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          x = this[i];
          this[i] = this[i - 1];
          this[i - 1] = x;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
