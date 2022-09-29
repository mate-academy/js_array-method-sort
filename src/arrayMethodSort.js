'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareFn = (a, b) => {
    const aToString = String(a); // a.toString()
    const bToString = String(b); // a.toString()

    if (aToString > bToString) {
      return 1;
    };

    if (aToString < bToString) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareFn) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstCheked = this[i - 1];
        const secondCheked = this[i];

        if (compareFunction(firstCheked, secondCheked) > 0) {
          this[i - 1] = secondCheked;
          this[i] = firstCheked;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
