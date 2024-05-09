'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback = (a, b) => String(a) > String(b)) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (callback(this[i], this[j]) > 0) {
          const firstValue = this[i];

          this[i] = this[j];
          this[j] = firstValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
