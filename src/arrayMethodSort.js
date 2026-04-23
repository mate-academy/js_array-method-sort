'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compare = (a, b) => String(a) > String(b) ? 1 : -1;

    if (compareFunction) {
      compare = compareFunction;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        if (compare(this[j - 1], this[j]) > 0) {
          [this[j - 1], this[j]] = [this[j], this[j - 1]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
