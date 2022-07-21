'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let x = compareFunction;

    if (x === undefined) {
      x = function(a, b) {
        if (a.toString() >= b.toString()) {
          return 1;
        } else {
          return -1;
        };
      };
    };

    let y = 0;

    for (let i = 0; i < this.length - 1; i++) {
      for (let i2 = 0; i2 < this.length - 1 - i; i2++) {
        if (x(this[i2], this[i2 + 1]) > 0) {
          y = this[i2];
          this[i2] = this[i2 + 1];
          this[i2 + 1] = y;
        };
      };
    };

    return this;
  };
}

module.exports = applyCustomSort;
