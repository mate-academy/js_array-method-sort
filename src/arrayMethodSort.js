'use strict';

/**
 * Implement method Sort
 */
const compareStrings = (a, b) => {
  const prev = a.toString();
  const current = b.toString();

  if (prev > current) {
    return 1;
  }

  if (prev < current) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = this[i];
          this[i] = previousValue;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
