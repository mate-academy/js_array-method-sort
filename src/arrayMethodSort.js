'use strict';

/**
 * Implement method Sort
 */
const stringCompare = (a, b) => {
  const aString = a.toString();
  const bString = b.toString();

  if (aString > bString) {
    return 1;
  }

  if (aString < bString) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const tmp = this[i - 1];

          count++;
          this[i - 1] = this[i];
          this[i] = tmp;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
