'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 1; i < this.length; i++) {
      for (let j = 0; j < this.length - i; j++) {
        if (!compareFunction) {
          if ('' + this[j] > '' + this[j + 1]) {
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
          continue;
        }

        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
