'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareString = (previousElement, currentElement) => {
    const previousString = previousElement.toString();
    const currentString = String(currentElement);

    if (previousString > currentString) {
      return 1;
    } else if (previousString < currentString) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
