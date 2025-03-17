'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const a = this[j];
        const b = this[j + 1];
        const compareResult = compareFunction
          ? compareFunction(a, b)
          : a.toString() > b.toString()
            ? 1
            : a.toString() < b.toString()
              ? -1
              : 0;

        if (compareResult > 0) {
          this[j] = b;
          this[j + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
