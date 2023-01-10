'use strict';

/**
 * Implement method Sort
 */
const defaultCompareFunction = (a, b) => {
  if (a.toString() < b.toString()) {
    return -1;
  }

  if (a.toString() > b.toString()) {
    return 1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      let condition = 1;

      if (i >= 0) {
        condition = compareFunction(this[i + 1], this[i]);
      }

      if (condition < 0 && i >= 0) {
        const temporaryContainer = this[i];

        this[i] = this[i + 1];
        this[i + 1] = temporaryContainer;

        i -= 2;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
