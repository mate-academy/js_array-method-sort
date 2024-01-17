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

  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const compareResult = compareFunction
          ? compareFunction(this[j], this[j + 1])
          : customCompare(this[j], this[j + 1]);

        if (compareResult > 0) {
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
