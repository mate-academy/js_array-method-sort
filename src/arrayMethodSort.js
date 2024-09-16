'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let k = 0; k < this.length; k++) {
      for (let i = 1; i < this.length; i++) {
        const prevVal = this[i - 1];
        const currentVal = this[i];

        if ((!compareFunction && prevVal.toString() > currentVal.toString())
          || (compareFunction && compareFunction(prevVal, currentVal) > 0)) {
          this[i] = prevVal;
          this[i - 1] = currentVal;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
