'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    for (let i = 0; i < this.length - 1; i++) {
      const shouldSwap = callback
        ? callback(this[i], this[i + 1]) > 0
        : this[i].toString() > this[i + 1].toString();

      if (shouldSwap) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        i = i > 0 ? i - 2 : -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
