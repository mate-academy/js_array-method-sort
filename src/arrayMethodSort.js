'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const asStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    return (
      (stringA === stringB) ? 0 : (stringA > stringB) ? 1 : -1
    );
  };

  [].__proto__.sort2 = function(compareFunction = asStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
