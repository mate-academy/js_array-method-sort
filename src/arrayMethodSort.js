'use strict';

/**
 * Implement method Sort
 */
function stringSortFunction(a, b) {
  if (String(a) < String(b)) {
    return -1;
  }

  if (String(a) > String(b)) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringSortFunction
  ) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
