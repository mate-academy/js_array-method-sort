'use strict';

/**
 * Implement method Sort
 */

const compareAsFunction = (a, b) => {
  const functionA = String(a);
  const functionB = String(b);

  if (functionA > functionB) {
    return 1;
  }

  if (functionA < functionB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compareAsFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const curent = this[i];

        if (compareFunction(previous, curent) > 0) {
          count++;
          this[i - 1] = curent;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
