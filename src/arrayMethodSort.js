'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (a, b) => {
  const str1 = String(a);
  const str2 = String(b);

  if (str1 > str2) {
    return 1;
  } else if (str1 < str2) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const first = this[i];
        const second = this[i + 1];

        if (compareFunction(first, second) > 0) {
          this[i] = second;
          this[i + 1] = first;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
