'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  }

  if (strA < strB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;

          [this[i - 1], this[i]] = [current, prev];
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
