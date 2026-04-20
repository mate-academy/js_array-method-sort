'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (prev, curr) => String(prev) > String(curr) ? 1 : -1;

function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = defaultCompare
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[j], this[minIndex]) < 0) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = this[i];

        this[i] = this[minIndex];
        this[minIndex] = temp;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
