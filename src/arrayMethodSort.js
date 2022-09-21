'use strict';

/**
 * Implement method Sort
 */
function comparaAsStrings(a, b) {
  const aString = String(a);
  const bString = String(b);

  if (aString > bString) {
    return 1;
  }

  if (aString < bString) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = comparaAsStrings) {
    let counter;

    do {
      counter = 0;

      for (let index = 1; index < this.length; index++) {
        const prev = this[index - 1];
        const current = this[index];

        if (compareFunction(prev, current) > 0) {
          this[index - 1] = current;
          this[index] = prev;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
