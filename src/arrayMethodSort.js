'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA < strB) {
        return -1;
      } else if (strA > strB) {
        return 1;
      } else {
        return 0;
      }
    };

    const compare = compareFunction || defaultCompare;

    for (let i = 1; i < this.length; i++) {
      let j = i;

      while (j > 0 && compare(this[j - 1], this[j]) > 0) {
        [this[j], this[j - 1]] = [this[j - 1], this[j]];
        j--;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
