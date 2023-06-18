'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let finished = false;
    let func = compareFunction;

    if (!func) {
      func = function(a, b) {
        if (String(a) > String(b)) {
          return 1;
        }

        if (String(a) < String(b)) {
          return -1;
        }

        return 0;
      };
    }

    while (!finished) {
      finished = true;

      for (let i = 0; i < this.length - 1; i++) {
        if (func(this[i], this[i + 1]) > 0) {
          [this[i + 1], this[i]] = [this[i], this[i + 1]];
          finished = false;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
