'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (
          compareFunction
            ? compareFunction(this[j], this[j + 1]) > 0
            : String(this[j]) > String(this[j + 1])
        ) {
          const cash = this[j];

          this[j] = this[j + 1];
          this[j + 1] = cash;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
