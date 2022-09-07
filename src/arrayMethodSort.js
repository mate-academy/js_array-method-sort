'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsString(a, b) {
    const previousLetter = String(a);
    const nextLetter = String(b);

    if (previousLetter > nextLetter) {
      return 1;
    } else if (previousLetter === nextLetter) {
      return 0;
    } else {
      return -1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previousNumber = this[i - 1];
        const nextNumber = this[i];

        if (compareFunction(previousNumber, nextNumber) > 0) {
          counter++;

          this[i] = previousNumber;
          this[i - 1] = nextNumber;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
