'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousChar = this[i - 1];
        const currentChar = this[i];

        if (compareFunction(previousChar, currentChar) > 0) {
          this[i - 1] = currentChar;
          this[i] = previousChar;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

function defaultCompare(a, b) {
  const firstChar = a.toString();
  const secondChar = b.toString();

  if (firstChar < secondChar) {
    return -1;
  }

  if (firstChar > secondChar) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
