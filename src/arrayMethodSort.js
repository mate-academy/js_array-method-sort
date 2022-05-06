'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const str1 = String(a);
  const str2 = String(b);

  if (str1 > str2) {
    return 1;
  }

  if (str1 < str2) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compareAsStrings) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        let prev = this[i - 1];
        let curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          count++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
