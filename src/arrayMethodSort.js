'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count = 1;

    while (count > 0) {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          count++;
        }
      }
    }

    return this;
  };
};

function compareStrings(a, b) {
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

module.exports = applyCustomSort;
