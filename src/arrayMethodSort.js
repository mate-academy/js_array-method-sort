'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = (a, b) => a > b) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(String(this[i]), String(this[j])) > 0) {
          [this[j], this[i]] = [this[i], this[j]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
