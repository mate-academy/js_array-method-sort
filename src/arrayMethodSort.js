'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) < String(b)) {
      return -1;
    } else if (String(a) > String(b)) {
      return 1;
    }

    return 0;
  }) {
    for (let i = 1; i < this.length; i++) {
      for (let k = i; k && compareFunction(this[k - 1], this[k]) > 0; k--) {
        [this[k], this[k - 1]] = [this[k - 1], this[k]];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
