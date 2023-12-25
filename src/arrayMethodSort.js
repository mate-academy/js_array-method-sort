'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {

  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      if (compareFunction) {
        const comparisonRes = compareFunction(this[i], this[i + 1]);
        if (comparisonRes > 0) {
          const temp = this[i];
          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
      else {
      if (i + 1 < this.length) {
        const a = this[i];
        const b = this[i + 1];
        if (a.localeCompare(b) === -1) {
          this[i] = b;
          this[i + 1] = a;
        }
      }
      }
    }
  };
}






module.exports = applyCustomSort;
