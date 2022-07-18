'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (a, b) => {
    const aStr = String(a);
    const bStr = String(b);

    return aStr > bStr;
  };

  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let isLastIteration;

    do {
      isLastIteration = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          isLastIteration = true;
        }
      }
    } while (isLastIteration);

    return this;
  };
}

module.exports = applyCustomSort;
