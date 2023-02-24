'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareAsStrings = (a, b) => {
      return String(a) > String(b);
    };

    const compare = compareFunction || compareAsStrings;
    let isSorted;

    do {
      isSorted = true;

      for (let i = 1; i < this.length; i++) {
        if (compare(this[i - 1], this[i]) > 0) {
          isSorted = false;

          const temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;
        }
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
