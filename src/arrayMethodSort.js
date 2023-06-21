'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompateFunc) {
    for (let i = 0; i < this.length; i++) {
      for (let x = i + 1; x < this.length; x++) {
        if (compareFunction(this[i], this[x]) > 0) {
          const cur = this[i];

          this[i] = this[x];
          this[x] = cur;
        }
      }
    }

    return this;
  };

  function defaultCompateFunc(a, b) {
    const aValue = a.toString();
    const bValue = b.toString();

    if (aValue > bValue) {
      return 1;
    };

    if (aValue < bValue) {
      return -1;
    };

    return 0;
  }
}

module.exports = applyCustomSort;
