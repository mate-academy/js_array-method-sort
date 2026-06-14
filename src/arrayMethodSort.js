'use strict';

/**
 * Implement method Sort
 */
 function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length <= 1) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        let shouldSwap;

        if (typeof compareFunction === 'function') {
          shouldSwap = compareFunction(this[j], this[j + 1]) > 0;
        } else {
          shouldSwap = String(this[j]) > String(this[j + 1]);
        }
        
        if (shouldSwap) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
