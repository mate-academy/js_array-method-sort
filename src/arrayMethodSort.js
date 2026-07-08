'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        let shouldSwap = false;
        const current = this[j];
        const next = this[j + 1];

        if (compareFunction === undefined) {
          if (String(current) > String(next)) {
            shouldSwap = true;
          }
        } else {
          if (compareFunction(current, next) > 0) {
            shouldSwap = true;
          }
        }

        if (shouldSwap) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
