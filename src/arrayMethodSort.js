'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let newCompareFunction = compareFunction;
    let temp = '';

    if (newCompareFunction === undefined) {
      newCompareFunction = (a, b) => `${a}` >= `${b}` ? 0 : -1;
    }

    for (let i = 0; i < this.length; i++) {
      for (let g = i + 1; g < this.length; g++) {
        if (newCompareFunction(this[g], this[i]) < 0) {
          temp = this[i];
          this[i] = this[g];
          this[g] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
