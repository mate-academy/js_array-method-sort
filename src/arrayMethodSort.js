'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareToString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareToString(prev, current) {
  if (String(prev) === String(current)) {
    return 0;
  }

  if (String(prev) > String(current)) {
    return 1;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;
