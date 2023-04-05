'use strict';

/**
 * Implement method Sort
 */
function compareAB(a, b) {
  const aStr = String(a);
  const bStr = String(b);

  if (aStr > bStr) {
    return 1;
  }

  if (aStr < bStr) {
    return -1;
  }

  if (aStr === bStr) {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAB) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          this[i - 1] = b;
          this[i] = a;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
