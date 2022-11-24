'use strict';

/**
 * Implement method Sort
 */

function noCallback(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = noCallback) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElement = this[i - 1];
        const secondElement = this[i];

        if (compareFunction(firstElement, secondElement) > 0) {
          this[i - 1] = secondElement;
          this[i] = firstElement;
          count++;
        }
      };
    } while (count > 0);

    return this;
  };
};

module.exports = applyCustomSort;
