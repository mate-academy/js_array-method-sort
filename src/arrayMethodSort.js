'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i += 1) {
      for (let j = 0; j < this.length - 1; j += 1) {
        const a = this[j];
        const b = this[j + 1];

        if (compareFunction) {
          if (compareFunction(a, b) > 0) {
            [this[j], this[j + 1]] = [b, a];
          }
        } else {
          if (String(a) > String(b)) {
            [this[j], this[j + 1]] = [b, a];
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
