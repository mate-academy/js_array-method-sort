'use strict';

/**
 * Implement method Sort
 */
const compareString = (a, b) => {
  const str1 = String(a);
  const str2 = String(b);

  if (str1 > str2) {
    return 1;
  } else if (str1 === str2) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let countIteration = 0;

    do {
      countIteration = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          countIteration++;
        }
      }
    } while (countIteration > 0);

    return this;
  };
}

module.exports = applyCustomSort;
