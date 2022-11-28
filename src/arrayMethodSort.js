'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          counter++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };
}

const compareAsString = function(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
