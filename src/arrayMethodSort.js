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
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const el = this[i - 1];

          this[i - 1] = this[i];
          this[i] = el;
          count++;
        }
      }
    } while (count !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
