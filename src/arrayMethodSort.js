'use strict';

/**
 * Implement method Sort
//  */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => String(a) > String(b)) {
    for (let a = this.length; a >= 0; a--) {
      for (let i = 0; i < this.length - 1; i++) {
        const value1 = this[i];
        const value2 = this[i + 1];

        if (compareFunction(value1, value2) > 0) {
          this[i] = value2;
          this[i + 1] = value1;
        }
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
