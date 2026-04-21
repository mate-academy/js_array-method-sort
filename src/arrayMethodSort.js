'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let flag = true;

    while (flag) {
      flag = false;

      for (let k = 1; k < this.length; k++) {
        const a = this[k - 1];
        const b = this[k];

        let shouldSwap;

        if (compareFunction) {
          shouldSwap = compareFunction(a, b) > 0;
        } else {
          shouldSwap = String(a) > String(b);
        }

        if (shouldSwap) {
          [this[k - 1], this[k]] = [this[k], this[k - 1]];
          flag = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
