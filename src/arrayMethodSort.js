'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareSortFunction = (a, b) => String(a) > String(b) ? 1 : -1;

  [].__proto__.sort2 = function(compareFunction = defaultCompareSortFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }
    
    // console.log(compareFunction)
    return this;
  };
}

module.exports = applyCustomSort;
