'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const stringsCompare = (a, b) => {
    const stringA = a.toString();
    const stringB = b.toString();

    if (stringA > stringB) {
      return 1;
    } else if (stringB > stringA) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = stringsCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const prev = this[i - 1];

        if (compareFunction(prev, current) > 0) {
          count += 1;
          this[i] = prev;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
