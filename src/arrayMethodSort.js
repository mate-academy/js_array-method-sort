'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const aString = String(a);
  const bString = String(b);

  if (aString === bString) {
    return 0;
  }

  return (aString > bString) ? 1 : -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i] = current;
          this[i + 1] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
