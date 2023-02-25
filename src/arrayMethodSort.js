'use strict';

/**
 * Implement method Sort
 */
const asStrings = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  return (strA > strB) - (strA < strB);
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = asStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
