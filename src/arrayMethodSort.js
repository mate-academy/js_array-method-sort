'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = dfCompare) {
    let count;

    do {
      count = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count);

    return this;
  };
}

function dfCompare(a, b) {
  const STRING_A = a.toString();
  const STRING_B = b.toString();

  if (STRING_A > STRING_B) {
    return 1;
  }

  if (STRING_A < STRING_B) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
