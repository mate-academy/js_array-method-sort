'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    function shouldSwap(a, b) {
      if (compareFunction) {
        return compareFunction(a, b) > 0;
      } else {
        return String(a) > String(b);
      }
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (shouldSwap(this[j], this[j + 1])) {
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
