'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const a = String(this[j]);
        const b = String(this[j + 1]);

        let cmp;
        if (callback) {
          cmp = callback(this[j], this[j + 1]);
        } else {
          cmp = a < b ? -1 : a > b ? 1 : 0;
        }

        if (cmp > 0) {
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
