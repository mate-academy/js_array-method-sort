'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (a, b) => {
  return String(a) > String(b);
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let changePosition;

    do {
      changePosition = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          changePosition++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (changePosition > 0);

    return this;
  };
}

module.exports = applyCustomSort;
