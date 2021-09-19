'use strict';

/**
 * Implement method Sort
 */
function compareString(a, b) {
  if (a.toString() > b.toString()) {
    return 1;
  }

  if (a.toString() < b.toString()) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const prev = this[i - 1];

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

module.exports = applyCustomSort;
