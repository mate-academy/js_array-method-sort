'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (x, y) => x.toString() > y.toString()) {
    let temp;

    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
