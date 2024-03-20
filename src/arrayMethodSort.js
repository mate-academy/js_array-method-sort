'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      const convertedA = String(a);
      const convertedB = String(b);

      if (convertedA > convertedB) {
        return 1;
      } else if (convertedA < convertedB) {
        return -1;
      } else {
        return 0;
      }
    },
  ) {
    const sorted = [];

    for (let i = this.length - 1; i >= 0; i--) {
      const sortedLengthBeforeInsertion = sorted.length;

      for (let j = 0; j < sorted.length; j++) {
        if (compareFunction(this[i], sorted[j]) <= 0) {
          sorted.splice(j, 0, this[i]);
          break;
        }
      }

      if (sortedLengthBeforeInsertion === sorted.length) {
        sorted.push(this[i]);
      }
    }

    for (let i = 0; i < this.length; i++) {
      this[i] = sorted[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
