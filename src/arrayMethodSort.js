'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const nextValue = this[i + 1];
        const currentValue = this[i];

        if (compareFunction(currentValue, nextValue) > 0) {
          count++;
          this[i] = nextValue;
          this[i + 1] = currentValue;
        }
      }
    } while (count > 0);

    return this;
  };

  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    } else {
      return -1;
    };
  };
}

module.exports = applyCustomSort;
