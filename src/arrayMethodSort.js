'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultSort = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    return (stringA > stringB) ? 1
      : (stringA === stringB) ? 0
        : -1;
  };

  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          this[i] = first;
          this[i - 1] = second;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
