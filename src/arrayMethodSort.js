"use strict";

/**
 * Implement method Sort
 */
function stringSortFunction(a, b) {
  if (String(a) < String(b)) {
    return -1;
  } else if (String(a) > String(b)) {
    return 1;
  } else {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = stringSortFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prew = this[i - 1];
        const current = this[i];

        if (compareFunction(prew, current) > 0) {
          count++;
          this[i] = prew;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
