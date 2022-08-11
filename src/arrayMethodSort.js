'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareString = (a, b) => {
    return +(String(a) > String(b));
  };

  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          ++count;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
