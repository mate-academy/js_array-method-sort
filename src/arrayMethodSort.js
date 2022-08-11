'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStr = (a, b) => {
    const strA = `${a}`;
    const strB = `${b}`;

    if (strA > strB) {
      return 1;
    }

    if (strA < strB) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareStr) {
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
    } while (count !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
