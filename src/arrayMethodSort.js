'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (item1, item2) => (item1 + '') > (item2 + '')) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let k = 0; k < this.length - 1 - i; k++) {
        const compareResult = compareFunction(this[k], this[k + 1]);

        if (compareResult > 0) {
          [this[k], this[k + 1]] = [this[k + 1], this[k]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
