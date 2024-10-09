'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compareFunc =
      compareFunction ||
      function (a, b) {
        if (`${a}` > `${b}`) {
          return 1;
        } else if (`${a}` < `${b}`) {
          return -1;
        }

        return 0;
      };

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunc(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
