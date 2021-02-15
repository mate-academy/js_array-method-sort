'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareString = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    } else if (stringA === stringB) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(prevElement, currentElement) > 0) {
          count++;
          this[i] = prevElement;
          this[i - 1] = currentElement;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
