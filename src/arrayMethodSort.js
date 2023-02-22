'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (prev, current) => {
    if (String(prev) > String(current)) {
      return 1;
    }

    if (String(prev) < String(current)) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
