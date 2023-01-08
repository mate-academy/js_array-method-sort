'use strict';

/**
 * Implement method Sort
 */

const compareAsFunction = (a, b) => {
  const first = String(a);
  const second = String(b);

  if (first > second) {
    return 1;
  } else if (first === second) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(prevElement, currentElement) >= 0) {
          this[i - 1] = currentElement;
          this[i] = prevElement;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
