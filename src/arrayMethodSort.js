'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    while (count !== 0) {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const nextElement = this[i];

        if (compareFunction(previousElement, nextElement) > 0) {
          this[i - 1] = nextElement;
          this[i] = previousElement;
          count++;
        } else if (compareFunction(previousElement, nextElement) < 0) {
          this[i - 1] = previousElement;
          this[i] = nextElement;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
