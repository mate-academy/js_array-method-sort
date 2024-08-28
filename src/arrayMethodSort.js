'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const useCompareFunction = typeof compareFunction === 'function';

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (useCompareFunction) {
          if (compareFunction(this[i], this[j]) > 0) {
            [this[i], this[j]] = [this[j], this[i]];
          }
        } else {
          if (String(this[i]) > String(this[j])) {
            [this[i], this[j]] = [this[j], this[i]];
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
