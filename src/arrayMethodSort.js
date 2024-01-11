'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) <= String(b)) {
      return -1;
    }
  }) {
    for (let i = 0; i < this.length - 1; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        this.sort2(compareFunction);
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
