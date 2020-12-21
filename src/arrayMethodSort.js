'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareCallback = (a, b) => {
    const valueA = String(a);
    const valueB = String(b);

    if (valueA > valueB) {
      return 1;
    }

    if (valueA < valueB) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareCallback) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
