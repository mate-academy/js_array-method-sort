'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {

        let shouldSwap = false;

        if (typeof compareFunction === 'function') {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            shouldSwap = true;
          }
        } else {
          if (String(this[j]) > String(this[j + 1])) {
            shouldSwap = true;
          }
        }

        if (shouldSwap) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
