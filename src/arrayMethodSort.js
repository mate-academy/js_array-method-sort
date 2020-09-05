'use strict';

const compareAsString = (a, b) => {
  if (String(a) > String(b)) {
    return 1;
  } else if (String(a) < String(b)) {
    return -1;
  } else {
    return 0;
  }
};

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count = 0;

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

module.exports = applyCustomSort;
