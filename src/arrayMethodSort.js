'use strict';

/**
 * Implement method Sort
 */

const compareAsStrings = (a, b) => {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) === String(b)) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here

    for (let i = 1; i < this.length; i++) {
      const a = this[i - 1];
      const b = this[i];

      if (compareFunction(a, b) > 0) {
        this[i] = a;
        this[i - 1] = b;
        i = 0;
      }
    }

    return this;
  };
}
applyCustomSort();

module.exports = applyCustomSort;
