'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(customCompareFunction) {
    const compareFunction = customCompareFunction || ((a, b) => {
      if (String(a) < String(b)) {
        return -1;
      }

      if (String(a) > String(b)) {
        return 1;
      }

      return 0;
    });

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const element = this[i];

          this[i] = this[j];
          this[j] = element;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
