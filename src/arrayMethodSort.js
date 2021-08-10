'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const result = (a, b) => (a.toString() > b.toString());

  [].__proto__.sort2 = function(compareFunction = result) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const x = this[i];

        if (compareFunction(prev, x) > 0) {
          this[i - 1] = x;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
