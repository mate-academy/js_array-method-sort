'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => a.toString() > b.toString();

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    for (let i = 0, endI = this.length - 1; i < endI; i++) {
      let wasSwap = false;

      for (let j = i + 1, endJ = endI; j < endJ; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          wasSwap = true;
        }
      }

      if (!wasSwap) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
