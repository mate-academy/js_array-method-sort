'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        let result;

        if (typeof compareFunction === 'function') {
          result = compareFunction(this[j], this[j + 1]);
        } else {
          const a = String(this[j]);
          const b = String(this[j + 1]);

          if (a > b) {
            result = 1;
          } else if (a < b) {
            result = -1;
          } else {
            result = 0;
          }
        }

        if (result > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
