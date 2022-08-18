'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curent = this[i];

        if (compareFunction(prev, curent) > 0) {
          this[i - 1] = curent;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const stringCompare = (a, b) => {
  const str1 = String(a);
  const str2 = String(b);

  if (str1 < str2) {
    return -1;
  }

  if (str1 > str2) {
    return 1;
  }

  return 0;
};

module.exports = applyCustomSort;
