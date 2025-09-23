'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const x = this[j];
            const y = this[j + 1];

            this[j] = y;
            this[j + 1] = x;
          }
        } else {
          const a = String(this[j]);
          const b = String(this[j + 1]);

          if (a > b) {
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
        }
      }
    }

    return this;
  };

  return [].__proto__.sort2;
}

module.exports = applyCustomSort;
