'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const sortString = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    }

    if (stringA < stringB) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = sortString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          count++;
          this[i - 1] = second;
          this[i] = first;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
