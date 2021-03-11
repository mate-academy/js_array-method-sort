'use strict';

/**
 * Implement method Sort
 */
const compareStrings = (a, b) => {
  const firstString = a.toString();
  const secondString = b.toString();

  if (firstString > secondString) {
    return 1;
  } else if (firstString === secondString) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (compareFunction(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
