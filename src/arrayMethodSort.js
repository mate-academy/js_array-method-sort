'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (previous, next) => {
    const stringPrevious = previous.toString();
    const stringNext = next.toString();

    if (stringPrevious > stringNext) {
      return 1;
    }

    if (stringPrevious === stringNext) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isSorted;

    do {
      isSorted = false;

      for (let i = 1; i < this.length; i++) {
        const element = this[i];
        const previousElement = this[i - 1];

        if (compareFunction(previousElement, element) > 0) {
          isSorted = true;
          this[i] = previousElement;
          this[i - 1] = element;
        }
      }
    } while (isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
