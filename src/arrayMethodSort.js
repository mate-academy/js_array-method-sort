'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction && typeof compareFunction === 'function') {
      return this.sort(compareFunction);
    } else {
      const defaultCompare = (a, b) => {
        if (a === b) return 0;
        return a < b ? -1 : 1;
      };

      return this.sort(defaultCompare);
    }
  };
}

module.exports = applyCustomSort;
