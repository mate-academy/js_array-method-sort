'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const standartCompare = (a, b) => {
    const strA = `${a}`;
    const strB = `${b}`;

    if (strA > strB) {
      return 1;
    } else if (strA === strB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = standartCompare) {
    let prev = this[0];
    let curr = this[1];
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];
        curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          count += 1;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
