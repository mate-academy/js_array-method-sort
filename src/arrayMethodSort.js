'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const aString = a.toString();
    const bString = b.toString();

    if (aString > bString) {
      return 1;
    }

    if (aString === bString) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const element = this[i];
        const previousElement = this[i - 1];

        if (compareFunction(previousElement, element) > 0) {
          count++;
          this[i] = previousElement;
          this[i - 1] = element;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
