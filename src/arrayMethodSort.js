'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        let needSwap = false;

        if (compareFunction) {
          const result = compareFunction(this[j], this[j + 1]);

          if (result > 0) {
            needSwap = true;
          }
        } else if (String(this[j]) > String(this[j + 1])) {
          needSwap = true;
        }

        if (needSwap) {
          const value = this[j];

          this[j] = this[j + 1];
          this[j + 1] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
