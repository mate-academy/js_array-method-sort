'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const result = (a, b) => (a.toString() > b.toString());

  [].__proto__.sort2 = function(compareFunction = result) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const preValue = this[i - 1];
        const curValue = this[i];

        if (compareFunction(preValue, curValue) > 0) {
          this[i - 1] = curValue;
          this[i] = preValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
