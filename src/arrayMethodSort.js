'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => {
  const str1 = a.toString();
  const str2 = b.toString();

  if (str1 > str2) {
    return 1;
  }

  if (str1 < str2) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const previous = this[i - 1];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i] = previous;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
