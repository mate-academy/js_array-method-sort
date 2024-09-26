'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function customCompare(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
      return a > b ? 1 : -1;
    }

    return String(a).localeCompare(String(b));
  }

  [].__proto__.sort2 = function(compareFunction = customCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
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
