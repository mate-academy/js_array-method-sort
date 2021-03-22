'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringB === stringA) {
      return 0;
    } else {
      return -1;
    }
  }) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const curentValue = this[i];
        const prevValue = this[i - 1];

        if (compareFunction(prevValue, curentValue) > 0) {
          this[i] = prevValue;
          this[i - 1] = curentValue;
          count++;
        }
      }
    }
    while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
