'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callCompare = compareFunction;

    if (compareFunction === undefined) {
      callCompare = function(a, b) {
        const strA = a.toString();
        const strB = b.toString();

        if (strA < strB) {
          return -1;
        } else if (strA > strB) {
          return 1;
        }

        return 0;
      };
    }

    let arrLength = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      for (let n = 0; n < arrLength; n++) {
        if (callCompare(this[n], this[n + 1]) > 0) {
          const temp = this[n];

          this[n] = this[n + 1];
          this[n + 1] = temp;
        }
      }
      arrLength--;
    }

    return this;
  };
}

module.exports = applyCustomSort;
