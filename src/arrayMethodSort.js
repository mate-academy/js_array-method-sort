'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(x, y) {
  const a = String(x);
  const b = String(y);

  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a, b) > 0) {
          count++;
          this[i] = b;
          this[i + 1] = a;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
