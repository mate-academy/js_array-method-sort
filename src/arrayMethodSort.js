'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortString) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          counter++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };
}

function sortString(a, b) {
  if (String(a) > String(b)) {
    return 1;
  } else if (String(a) < String(b)) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
