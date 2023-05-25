'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      for (let f = i + 1; f < this.length; f++) {
        if (compareFunction
          ? compareFunction(this[i], this[f]) > 0
          : String(this[i]) > String(this[f])) {
          const temp = this[i];

          this[i] = this[f];
          this[f] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
