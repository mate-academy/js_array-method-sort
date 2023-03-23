'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultSort = (elementA, elemenrB) => {
      return String(elementA) > String(elemenrB)
        ? 1
        : String(elementA) === String(elemenrB)
          ? 0
          : -1;
    };

    const currentSort = compareFunction === undefined
      ? defaultSort
      : compareFunction;

    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (currentSort(this[i - 1], this[i]) > 0) {
          const transferValue = this[i - 1];

          this[i - 1] = this[i];
          this[i] = transferValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
