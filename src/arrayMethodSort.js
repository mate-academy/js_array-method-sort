'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let func = compareFunction;

    if (func === undefined) {
      func = function(a, b) {
        if (a.toString() >= b.toString()) {
          return 1;
        } else {
          return -1;
        };
      };
    };

    let change = 0;

    for (let i = 0; i < this.length - 1; i++) {
      for (let i2 = 0; i2 < this.length - 1 - i; i2++) {
        if (func(this[i2], this[i2 + 1]) > 0) {
          change = this[i2];
          this[i2] = this[i2 + 1];
          this[i2 + 1] = change;
        };
      };
    };

    return this;
  };
}

module.exports = applyCustomSort;
