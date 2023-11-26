'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)) {
    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[j], this[i]] = [this[i], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
