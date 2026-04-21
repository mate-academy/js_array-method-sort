'use strict';

/**
 * Implement method Sort
 */
function compareStrings(firstString, secondString) {
  if (String(firstString) < String(secondString)) {
    return -1;
  }

  if (String(firstString) > String(secondString)) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          counter++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
