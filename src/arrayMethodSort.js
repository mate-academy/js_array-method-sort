'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  if (String(a) > String(b)) {
    return 1;
  } else if (String(a) < String(b)) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let left = 0;
    let right = this.length - 1;

    while (left <= right) {
      for (let i = right; i > left; i--) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
        }
      }
      left++;

      for (let i = left; i < right; ++i) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
      right--;
    }

    return this;
  };
}

module.exports = applyCustomSort;
