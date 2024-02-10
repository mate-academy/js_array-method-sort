'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let n = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < n; i++) {
        const isCompareFunction = compareFunction !== undefined
          && compareFunction !== null
          && typeof compareFunction === 'function';
        let shouldSwap;

        if (isCompareFunction) {
          shouldSwap = compareFunction(this[i - 1], this[i]) > 0;
        } else {
          shouldSwap = this[i - 1].toString() > this[i].toString();
        }

        if (shouldSwap) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
