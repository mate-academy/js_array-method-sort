'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compareFn = compareFunction;

    if (!compareFn) {
      compareFn = (a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr < bStr) {
          return -1;
        } else if (aStr > bStr) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const a = this[j];
        const b = this[j + 1];
        const resultCompare = compareFn(a, b);

        if (resultCompare > 0) {
          this[j] = b;
          this[j + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
