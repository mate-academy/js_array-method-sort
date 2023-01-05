'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let previousElement;
    let currentElement;
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        previousElement = this[i - 1];
        currentElement = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = currentElement;
          this[i] = previousElement;
          count++;
        }
      }
    } while (count !== 0);

    return this;
  };
};

function defaultCompare(a, b) {
  if (String(a) > String(b) || a === undefined) {
    return 1;
  }

  if (String(a) === String(b)) {
    return 0;
  }

  return -1;
};

module.exports = applyCustomSort;
