'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;

    if (typeof callback !== 'function') {
      callback = (a, b) => {
        if (a === b) {
          return 0;
        }

        return a + '' < b + '' ? -1 : 1;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (callback(this[j], this[j + 1]) > 0) {
          const currentValue = this[j];

          this[j] = this[j + 1];
          this[j + 1] = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
