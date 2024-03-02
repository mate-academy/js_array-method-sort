'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (first, second) => {
      return String(first) >= String(second) ? 1 : -1;
    },
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (compareFunction(this[i], this[j]) < 0) {
          const lesserValue = this[i];
          const biggerValue = this[j];

          this[i] = biggerValue;
          this[j] = lesserValue;
          i--;
        } else {
          break;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
