'use strict';

/**
 * Implement method Sort
 */
const compareStrings = (x, y) => {
  const stringOfX = x.toString();
  const stringOfY = y.toString();

  if (stringOfX > stringOfY) {
    return 1;
  } else if (stringOfX < stringOfY) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
