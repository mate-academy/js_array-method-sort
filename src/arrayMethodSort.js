'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let callback = compareFunction;

    if (compareFunction === undefined) {
      callback = (a, b) => {
        const firstString = String(a);
        const secondString = String(b);

        if (firstString > secondString) {
          return 1;
        } else if (secondString === firstString) {
          return 0;
        }

        return -1;
      };
    }

    let count;

    while (count !== 0) {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const secondNumber = this[i];
        const firstNumber = this[i - 1];

        if (callback(this[i - 1], this[i]) > 0) {
          this[i - 1] = secondNumber;
          this[i] = firstNumber;

          count++;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
