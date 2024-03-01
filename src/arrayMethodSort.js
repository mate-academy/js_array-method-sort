'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        const compare = compareFunction || ((a, b) => String(a) > String(b));

        if (compare(this[i], this[k]) > 0) {
          [this[i], this[k]] = [this[k], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
