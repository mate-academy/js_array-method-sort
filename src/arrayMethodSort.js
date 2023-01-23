'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCallback) {
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
}

const defaultCallback = (a, b) => {
  const prev = String(a);
  const current = String(b);

  if (prev > current) {
    return 1;
  } else if (prev === current) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
