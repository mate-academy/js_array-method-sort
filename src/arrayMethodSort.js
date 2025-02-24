'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let func = compareFunction;

    if (!func) {
      func = (a, b) => {
        return String(a) < String(b) ? -1 : String(a) > String(b) ? 1 : 0;
      };
    }

    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (func(this[j], this[j + 1]) > 0) {
          const a = this[j];

          this[j] = this[j + 1];
          this[j + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
