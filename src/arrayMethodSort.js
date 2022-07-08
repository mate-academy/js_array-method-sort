'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (itemA, itemB) =>
    String(itemA) > String(itemB) ? 1 : 0) {
    let isSorted;

    for (let loop = 1; loop < this.length; loop++) {
      isSorted = true;

      for (let item = 0; item < this.length - loop; item++) {
        if (compareFunction(this[item], this[item + 1]) > 0) {
          [this[item], this[item + 1]] = [this[item + 1], this[item]];
          isSorted = false;
        }
      }

      if (isSorted) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
