'use strict';

/**
 * Implement method Sort
 */
function compareAsString(a, b) {
  const element1 = String(a);
  const element2 = String(b);

  if (element1 > element2) {
    return 1;
  }

  if (element1 < element2) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    // write code here
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

module.exports = applyCustomSort;
