'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const len = this.length;
    const defaultSort = (a, b) => {
      const A = a.toString();
      const B = b.toString();

      if (A > B) {
        return 1;
      };

      if (A < B) {
        return -1;
      };

      return 0;
    };
    const sortFunction = compareFunction || defaultSort;

    for (let i = len - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (sortFunction(this[j - 1], this[j]) >= 0) {
          const temp = this[j - 1];

          this[j - 1] = this[j];
          this[j] = temp;
        }
      }
    };

    return this;
  };
}

module.exports = applyCustomSort;
