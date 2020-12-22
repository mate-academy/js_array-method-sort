'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (a, b) => {
  if (a.toString() > b.toString()) {
    return 1;
  } else if (a.toString() === b.toString()) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let current;
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        current = this[i];

        if (compareFunction(this[i - 1], current) > 0) {
          count++;

          this[i] = this[i - 1];
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
