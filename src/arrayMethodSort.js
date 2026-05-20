'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) =>
      a.toString() > b.toString() ? 1 : a.toString() < b.toString() ? -1 : 0,
  ) {
    let isSwapped;

    for (let i = 0; i < this.length; i++) {
      isSwapped = false;

      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          isSwapped = true;
        }
      }

      if (!isSwapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
