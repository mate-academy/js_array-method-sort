'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count !== 0);

    return this;
  };
}

function compareAsStrings(a, b) {
  const aString = String(a);
  const bString = String(b);

  if (aString > bString) {
    return 1;
  }

  if (bString > aString) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
