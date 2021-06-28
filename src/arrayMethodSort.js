'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefauld(a, b) {
    const firstPart = a + '';
    const secondPart = b + '';

    if (firstPart > secondPart) {
      return 1;
    } else if (firstPart === secondPart) {
      return 0;
    } else {
      return -1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareDefauld) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i] = previous;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
