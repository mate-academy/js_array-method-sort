'use strict';

/**
 * Implement method Sort
 */
function stringCompare(a, b) {
  const firstString = a.toString();
  const secondString = b.toString();

  if (firstString > secondString) {
    return 1;
  }

  if (firstString < secondString) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = stringCompare) {
    let counter = 0;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentElement = this[i];
        const nextElement = this[i + 1];

        if (callback(currentElement, nextElement) > 0) {
          this[i] = nextElement;
          this[i + 1] = currentElement;
          counter++;
        }
      }
    } while (counter !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
