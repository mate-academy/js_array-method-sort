'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const currentEl = this[j];
        const nextEl = this[j + 1];

        const isBigger = compareFunction
          ? compareFunction(currentEl, nextEl) > 0
          : currentEl.toString() > nextEl.toString();

        if (isBigger) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
