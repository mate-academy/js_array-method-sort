'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // write code here
  const strLetter = (a, b) => {
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

  [].__proto__.sort2 = function(compareFunction = strLetter) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const curren = this[i + 1];

        if (compareFunction(prev, curren) > 0) {
          count++;
          this[i] = curren;
          this[i + 1] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
