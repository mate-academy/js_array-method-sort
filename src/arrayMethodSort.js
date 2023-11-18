'use strict';

/**
 * Implement method Sort
 */
function compareAsString(a, b) {
  const aA = String(a);
  const bB = String(b);

  if (aA > bB) {
    return 1;
  }

  if (aA < bB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          count++;
          this[i - 1] = b;
          this[i] = a;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
