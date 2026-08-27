'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const length = this.length;

    const hasCallback = typeof compareFunction === 'function';

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        let shouldSwap = false;

        if (hasCallback) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            shouldSwap = true;
          }
        } else {
          const strA = String(this[j]);
          const strB = String(this[j + 1]);

          if (strA > strB) {
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
