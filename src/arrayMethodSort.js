'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (item1, item2) =>
      String(item1) > String(item2) ? 1 : -1,
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        } else {
          continue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
