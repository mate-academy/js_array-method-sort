'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const a = this[j];
        const b = this[j + 1];

        const compare = compareFunction
          ? compareFunction(a, b)
          : '' + a > '' + b
            ? 1
            : -1;

        if (compare > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
