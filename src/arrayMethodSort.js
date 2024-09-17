'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

function defaultCompareFunction(a, b) {
  const prev = a.toString();
  const current = b.toString();

  if (prev > current) {
    return 1;
  } else if (prev === current) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;
