'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultStringSorting) {
    let count = true;

    do {
      count = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count);

    return this;
  };
}

function defaultStringSorting(a, b) {
  return `${a}` > `${b}`;
}

module.exports = applyCustomSort;
