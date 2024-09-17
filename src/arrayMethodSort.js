'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let args = compareFunction;

    if (args === undefined) {
      args = function(a, b) {
        if (a.toString() >= b.toString()) {
          return 1;
        } else {
          return -1;
        };
      };
    };

    let changedVariable = 0;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (args(this[j], this[j + 1]) > 0) {
          changedVariable = this[j];
          this[j] = this[j + 1];
          this[j + 1] = changedVariable;
        };
      };
    };

    return this;
  };
}

module.exports = applyCustomSort;
