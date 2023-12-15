'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => String(a) > String(b);

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const tem = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tem;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
