'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
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

module.exports = applyCustomSort;
