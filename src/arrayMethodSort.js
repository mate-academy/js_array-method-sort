'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefaultFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const left = this[j];
        const right = this[j + 1];

        const compareResult = compareFunction(left, right);

        if (compareResult > 0) {
          this[j] = right;
          this[j + 1] = left;
        }
      }
    }

    return this;
  };
}

const compareDefaultFunction = (a, b) => String(a) > String(b);

module.exports = applyCustomSort;
