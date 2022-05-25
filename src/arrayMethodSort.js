'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let countChanges;

    do {
      countChanges = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          countChanges++;
        }
      }
    } while (countChanges > 0);

    return this;
  };
}

function compareStrings(a, b) {
  if (String(a) > String(b)) {
    return 1;
  } else if (String(a) < String(b)) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
