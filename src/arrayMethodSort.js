'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const previousString = String(a);
    const nextString = String(b);

    if (previousString > nextString) {
      return 1;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isSorted;

    do {
      isSorted = false;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const nextElement = this[i];

        if (compareFunction(previousElement, nextElement) > 0) {
          this[i - 1] = nextElement;
          this[i] = previousElement;
          isSorted = true;
        } else if (compareFunction(previousElement, nextElement) < 0) {
          this[i - 1] = previousElement;
          this[i] = nextElement;
        }
      }
    } while (isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
