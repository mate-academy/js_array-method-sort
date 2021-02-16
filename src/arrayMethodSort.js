'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareString = (a, b) => {
    const firstStrig = String(a);
    const secondtStrig = String(b);

    if (firstStrig > secondtStrig) {
      return 1;
    } else if (firstStrig === secondtStrig) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareString) {
    // write code here
    let result;

    do {
      result = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prev, currentValue) > 0) {
          result++;
          this[i - 1] = currentValue;
          this[i] = prev;
        }
      }
    } while (result > 0);

    return this;
  };
}
module.exports = applyCustomSort;
