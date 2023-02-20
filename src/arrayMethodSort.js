'use strict';

/**
 * Implement method Sort
 */
const compareDefault = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  };

  if (stringA < stringB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(prevElement, currentElement) > 0) {
          count++;
          this[i - 1] = currentElement;
          this[i] = prevElement;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
