'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };

  const compareStrings = (a, b) => {
    const newA = a.toString();
    const newB = b.toString();

    if (newA > newB) {
      return 1;
    } else if (newA < newB) {
      return -1;
    } else {
      return 0;
    }
  };
}

module.exports = applyCustomSort;
