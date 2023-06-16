'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction || function(a, b) {
      const strA = String(a);
      const strB = String(b);

      if (strA > strB) {
        return 1;
      }

      if (strA < strB) {
        return -1;
      }

      return 0;
    };

    for (let prev = 0; prev < this.length; prev++) {
      for (let next = prev + 1; next < this.length; next++) {
        if (compare(this[prev], this[next]) > 0) {
          [this[prev], this[next]] = [this[next], this[prev]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
