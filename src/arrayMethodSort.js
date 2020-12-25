'use strict';

/**
 * Implement method Sort
 */
function sortString(a, b) {
  const a1 = a.toString();
  const b1 = b.toString();

  if (a1 > b1) {
    return 1;
  } else if (a1 === b1) {
    return 0;
  } else {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
