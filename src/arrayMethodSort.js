'use strict';

/**
 * Implement method Sort
 */

function compareString(a, b) {
  if (String(a) < String(b)) {
    return -1;
  } else if (String(a) > String(b)) {
    return 1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const previous = this[i - 1];

        if (compareFunction(current, previous) < 0) {
          this[i - 1] = current;
          this[i] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
