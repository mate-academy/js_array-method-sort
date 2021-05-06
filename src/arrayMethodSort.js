'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          count += 1;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
