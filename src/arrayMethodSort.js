'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultSort = (elementA, elemenrB) => {
      if (String(elementA) > String(elemenrB)) {
        return 1;
      }

      if (String(elementA) === String(elemenrB)) {
        return 0;
      }

      return -1;
    };

    const currentSort = compareFunction === undefined
      ? defaultSort
      : compareFunction;

    let count = 0;
    let quantityElements = this.length;

    do {
      count = 0;

      for (let i = 1; i < quantityElements; i++) {
        const [prev, current] = [this[i - 1], this[i]];

        if (currentSort(prev, current) > 0) {
          [this[i], this[i - 1]] = [prev, current];
          count++;
        }
      }

      quantityElements--;
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
