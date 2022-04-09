'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = callback) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const callback = function(a, b) {
  const strA = a.toString();
  const strB = b.toString();

  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
