'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    }

    if (strA === strB) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
